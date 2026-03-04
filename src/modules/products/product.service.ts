import { prisma } from "../../config/prisma.js";
import notificationQueue from "../../config/redis.js";
import { customErrorMessgae } from "../../core/errors/custom-error-message.js";
import type { ResponseInterface } from "../../core/interfaces/response_interface.js";
import getBoundingBox from "../../core/utility/bounding_box.js";
import { sendNotification } from "../../core/utility/notification.js";
import {
  ProductStatus,
  RequestStatus,
  type PaymentStatus,
  type Product,
  type Purchase,
  type PurchaseRequest,
} from "../../generated/prisma/client.js";
import type { ProductDTO } from "./product.types.js";

export const ProductService = {
  // get all the products

  async getAllProducts() {
    const products = await prisma.product.findMany({
      include: {
        requests: true,
        purchase: true,
        owner: true,
      },
    });

    const response: ResponseInterface<{ Products: Product[] }> = {
      message: "Product Retrieved Succesfully",
      status: 1,
      data: {
        Products: products,
      },
    };

    return response;
  },
  // get a product with a particular id
  async getByParticularId(id: number) {
    const product = await prisma.product.findUnique({
      where: { id: id },
      include: {
        requests: true,
        purchase: true,
        owner: true,
      },
    });

    if (product != null) {
      const response: ResponseInterface<{ product: Product }> = {
        message: "Product Retrieved Succesfully",
        status: 1,
        data: {
          product: product,
        },
      };
      return response;
    } else {
      const response: ResponseInterface<null> = {
        message: "No Product Found",
        status: 1,
        data: null,
      };
      return response;
    }
  },
  // get a product in the nearby locations(latitude and longitude ke nearet products)
  async getNearByProducts(latitude: number, longitude: number) {
    const box = getBoundingBox(latitude, longitude, 5);

    const products = await prisma.product.findMany({
      where: {
        latitude: {
          gte: box.minLat,
          lte: box.maxLat,
        },
        longitude: {
          gte: box.minLng,
          lte: box.maxLng,
        },
      },
      include: {
        requests: true,
        purchase: true,
        owner: true,
      },
    });

    const response: ResponseInterface<{ Products: Product[] }> = {
      message: "Product Retrieved Succesfully",
      status: 1,
      data: {
        Products: products,
      },
    };

    return response;
  },
  // get and filter a particular product(baaed on price , status)

  async getByFilter(
    minPrice?: number,
    maxPrice?: number,
    status?: ProductStatus,
  ) {
    const where: any = {};

    if (status) where.status = status;

    if (minPrice !== undefined || maxPrice !== undefined) {
      where.price = {};
      if (minPrice !== undefined) where.price.gte = minPrice;
      if (maxPrice !== undefined) where.price.lte = maxPrice;
    }

    const products = await prisma.product.findMany({
      where: where,
      include: {
        requests: true,
        purchase: true,
        owner: true,
      },
    });

    const response: ResponseInterface<{ Products: Product[] }> = {
      message: "Product Retrieved Succesfully",
      status: 1,
      data: {
        Products: products,
      },
    };

    return response;
  },
  // create a product
  async createProduct(product: ProductDTO, ownerId: number) {
    const result = await prisma.product.create({
      data: {
        name: product.name,
        address: product.address,
        description: product.description,
        latitude: product.latitude,
        longitude: product.longitude,
        price: product.price,
        ownerId: ownerId,
        status: ProductStatus.AVAILABLE,
      },
    });

    // braodcast notification to all the nearby people in a 5 km radius using the reddis queue
    // getting the nearby coordinates
    const box = getBoundingBox(product.latitude, product.longitude, 5);

    //finding the product in the nearby location and their users
    const users = await prisma.user.findMany({
      where: {
        allowNotifications: true,
        products: {
          some: {
            latitude: {
              gte: box.minLat,
              lte: box.maxLat,
            },
            longitude: {
              gte: box.minLng,
              lte: box.maxLng,
            },
          },
        },
      },
    });

    // send a notification and add a entry on the database (we have to optimize through the reddis queue implementation)
    users.forEach((u) => {
      // // await is missing
      // sendNotification(product.name, product.description, u.token, "");
      // trying to implemenet this using the message queue
      // 1. adding all the elements in the queue
      notificationQueue.add(
        {
          title: product.name,
          body: product.description,
          screen: "product-screen", // right now it is static will replace it to the actual products screen once the application is created
          token: u.token,
        },
        {
          attempts: 3,
          delay: 1000,
        },
      );
      const notifcation = prisma.notification.create({
        data: {
          title: product.name,
          body: product.description,
          images: product.images,
          userId: u.id,
        },
      });
    });

    notificationQueue.process(async (job) => {
      console.log(job);
      await sendNotification(
        job.data.title,
        job.data.body,
        job.data.token,
        job.data.screen,
      );
    });

    const response: ResponseInterface<{ Product: ProductDTO }> = {
      message:
        "Product Created Succesfully and all the nearby users are also notified",
      status: 1,
      data: {
        Product: product,
      },
    };
    notificationQueue.process(async (job) => {
      // await sendNotification(job.data.name, job.data.description, jobdtaa.token, "")
    });
    return response;
  },

  // requesting purchasing  a product and sending the notification
  async requestPurchase(
    productId: number,
    requesterId: number,
    amount?: number,
    message?: string,
  ) {
    try {
      // Validate input types
      if (!Number.isInteger(productId) || productId <= 0) {
        const response: ResponseInterface<null> = {
          message: "Invalid product ID",
          status: 0,
          data: null,
        };
        return response;
      }

      if (!Number.isInteger(requesterId) || requesterId <= 0) {
        const response: ResponseInterface<null> = {
          message: "Invalid requester ID",
          status: 0,
          data: null,
        };
        return response;
      }

      // Validate that product exists and is available
      const product = await prisma.product.findUnique({
        where: { id: productId },
      });

      if (!product) {
        const response: ResponseInterface<null> = {
          message: "Product not found",
          status: 0,
          data: null,
        };
        return response;
      }

      if (product.status === ProductStatus.SOLD) {
        const response: ResponseInterface<null> = {
          message: "Product is already sold",
          status: 0,
          data: null,
        };
        return response;
      }

      // Validate that requester exists
      const requester = await prisma.user.findUnique({
        where: { id: requesterId },
      });

      if (!requester) {
        const response: ResponseInterface<null> = {
          message: "Requester not found",
          status: 0,
          data: null,
        };
        return response;
      }

      // Validate amount if provided
      if (amount !== undefined && (amount <= 0 || isNaN(amount))) {
        const response: ResponseInterface<null> = {
          message: "Invalid amount provided",
          status: 0,
          data: null,
        };
        return response;
      }

      const data: any = {};
      data.productId = productId;
      data.requesterId = requesterId;

      if (amount !== undefined && amount !== null) data.amount = amount;
      if (message) data.message = message;

      const result = await prisma.purchaseRequest.create({
        data: data,
      });

      await prisma.product.update({
        where: {
          id: productId,
        },
        data: {
          status: ProductStatus.REQUESTED,
        },
      });

      const response: ResponseInterface<{ request: PurchaseRequest }> = {
        message: "Product Requested Succesfully",
        status: 1,
        data: {
          request: result,
        },
      };

      return response;
    } catch (error) {
      const response: ResponseInterface<string> = {
        message: "Failed to create purchase request",
        status: 0,
        data: customErrorMessgae(error),
      };
      return response;
    }
  },

  //updating the status of the request made to purchase the product
  async updatePurchaseProduct(UpdatedStatus: RequestStatus, productId: number) {
    // Validate that product exists and is available
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      const response: ResponseInterface<null> = {
        message: "Product not found",
        status: 0,
        data: null,
      };
      return response;
    }

    if (product.status === ProductStatus.SOLD) {
      const response: ResponseInterface<null> = {
        message: "Product is already sold",
        status: 0,
        data: null,
      };
      return response;
    }
    // wrong request status transition
    if (
      UpdatedStatus == RequestStatus.ACCEPTED ||
      UpdatedStatus == RequestStatus.REJECTED
    ) {
      const result = await prisma.purchaseRequest.updateMany({
        where: {
          productId: productId,
        },
        data: {
          status: UpdatedStatus,
        },
      });

      const response: ResponseInterface<null> = {
        message: "Status Updated SuccesFully",
        status: 1,
      };

      return response;
    } else {
      const ans: ResponseInterface<null> = {
        message: "Invalid Transition",
        status: 0,
      };

      return ans;
    }
  },

  // purchasing a product

  async purchaseProduct(
    productId: number,
    purchaserId: number,
    ownerId: number,
    paymentAmount: number,
    paymentMethod: string,
    paymentStatus: PaymentStatus,
  ) {
    // purchasing  a product that do not exist
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });
    if (!product || product == null) {
      const ans: ResponseInterface<null> = {
        message: "Product do no exist",
        status: 0,
      };

      return ans;
    }

    // purchasing  a purchased  product
    if (product.status == ProductStatus.SOLD) {
      const ans: ResponseInterface<null> = {
        message: "Product already Sold",
        status: 0,
      };
      return ans;
    }
    // owner do not exits
    const owner = await prisma.user.findUnique({
      where: {
        id: ownerId,
      },
    });
    if (!owner || owner == null) {
      const ans: ResponseInterface<null> = {
        message: "Owner do not exist",
        status: 0,
      };
    }
    // purchaser do not exist
    const purchaser = await prisma.user.findUnique({
      where: {
        id: purchaserId,
      },
    });
    if (!purchaser || purchaser == null) {
      const ans: ResponseInterface<null> = {
        message: "Purchaser do not exist",
        status: 0,
      };
    }
    // owner and the purhaser id cannot be same
    if (ownerId == purchaserId) {
      const ans: ResponseInterface<null> = {
        message: "Owner and the Purchaser cannot be same",
        status: 0,
      };
      return ans;
    }

    const result = await prisma.purchase.create({
      data: {
        productId: productId,
        purchaserId: purchaserId,
        ownerId: ownerId,
        paymentAmount: paymentAmount,
        paymentMethod: paymentMethod,
        paymentStatus: paymentStatus,
      },
    });

    const response: ResponseInterface<{ purchase: Purchase }> = {
      message: "Product Purchased Succesfully",
      status: 1,
      data: {
        purchase: result,
      },
    };

    return response;
  },

  //delete all product
  async deleteAll(ownerId: number) {
    const owner = await prisma.user.findUnique({
      where: {
        id: ownerId,
      },
    });

    // owner do not exist
    if (!owner || owner == null) {
      const ans: ResponseInterface<null> = {
        message: "Owner do not exist",
        status: 0,
      };
    }

    const result = await prisma.product.deleteMany({
      where: {
        ownerId: ownerId,
      },
    });

    const response: ResponseInterface<null> = {
      message: "Products Deleted Succesfully",
      status: 1,
    };

    return response;
  },

  //delete a product with a id
  async deleteProductById(id: number) {
    // Validate that product exists and is available
    const product = await prisma.product.findUnique({
      where: { id: id },
    });

    if (!product) {
      const response: ResponseInterface<null> = {
        message: "Product not found",
        status: 0,
        data: null,
      };
      return response;
    } else {
      const result = await prisma.product.delete({
        where: {
          id: id,
        },
      });

      const response: ResponseInterface<Product> = {
        message: "Product Deleted Succesfully",
        status: 1,
        data: result,
      };

      return response;
    }
  },
};
