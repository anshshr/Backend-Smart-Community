import { customErrorMessgae } from "../../core/errors/custom-error-message.js";
import type { ResponseInterface } from "../../core/interfaces/response_interface.js";
import {
  PaymentStatus,
  ProductStatus,
  RequestStatus,
} from "../../generated/prisma/client.js";
import { ProductService } from "./product.service.js";
import type { Request, Response } from "express";
import * as z from "zod";

export const ProductController = {
  // get all the services
  async getAllProducts(req: Request, res: Response) {
    try {
      const response = await ProductService.getAllProducts();

      return res.status(200).json(response);
    } catch (error) {
      const ans: ResponseInterface<string> = {
        message: "Error Occured",
        status: 0,
        data: customErrorMessgae(error),
      };
      return res.status(500).json(ans);
    }
  },

  // get a product with a particular id
  async getByParticularId(req: Request, res: Response) {
    try {
      const products = z.object({
        id: z.string("Please provide the product id").transform(Number),
      });

      const result = products.safeParse(req.params);

      if (result.success) {
        const { id } = result.data;
        const response = await ProductService.getByParticularId(id);
        return res.status(200).json(response);
      } else {
        throw result.error;
      }
    } catch (error) {
      const ans: ResponseInterface<string> = {
        message: "Error Occured",
        status: 0,
        data: JSON.stringify(error),
      };
      return res.status(500).json(ans);
    }
  },
  // get a product in the nearby locations(latitude and longitude ke nearet products)
  async getNearByProducts(req: Request, res: Response) {
    try {
      const product = z.object({
        latitude: z.coerce.number("Enter the correct value of the latitude"),
        longitude: z.coerce.number("Enter the correct value of the longitude"),
      });

      const result = product.safeParse(req.query);

      if (result.success) {
        const { latitude, longitude } = result.data;

        const response = await ProductService.getNearByProducts(
          latitude,
          longitude,
        );

        return res.status(200).json(response);
      } else {
        throw result.error;
      }
    } catch (error) {
      const ans: ResponseInterface<string> = {
        message: "Error Occured",
        status: 0,
        data: customErrorMessgae(error),
      };
      return res.status(500).json(ans);
    }
  },

  // get and filter a particular product(baaed on price , status)
  async getByFilter(req: Request, res: Response) {
    try {
      const data = z.object({
        minPrice: z.coerce
          .number("Enter the correct value of the minPrice")
          .optional(),
        maxPrice: z.coerce
          .number("Enter the correct value of the maxPrice")
          .optional(),
        status: z
          .enum(
            ProductStatus,
            "Available values are  AVAILABLE , REQUESTED , SOLD ",
          )
          .optional(),
      });

      const result = data.safeParse(req.query);

      if (result.success) {
        const { minPrice, maxPrice, status } = result.data;
        const response = await ProductService.getByFilter(
          minPrice,
          maxPrice,
          status,
        );
        return res.status(200).json(response);
      } else {
        throw result.error;
      }
    } catch (error) {
      const ans: ResponseInterface<string> = {
        message: "Error Occured",
        status: 0,
        data: customErrorMessgae(error),
      };
      return res.status(500).json(ans);
    }
  },

  // create a product
  async createProduct(req: Request, res: Response) {
    try {
      // flow aisa ho ki like jo user product creta kar rha hia uska token  leke me requet maru to crate the product
      const productSchema = z.object({
        name: z.string("Please provide the correct name of the product"),
        description: z.string("Please provide the description"),
        images: z.array(z.string("Some error occured while parsing images")),
        latitude: z.number("Enter the correct value of the latitude"),
        longitude: z.number("Enter the correct value of the longitude"),
        address: z.string("Enter the correct value of the address"),
        price: z.number("Enter the price in the proper format"),
      });

      const result = productSchema.safeParse(req.body);

      if (result.success) {
        const userId = (req as any).id;

        if (!userId) {
          const ans: ResponseInterface<null> = {
            message: "User not authenticated",
            status: 0,
          };
          return res.status(401).json(ans);
        }

        const response = await ProductService.createProduct(
          result.data,
          userId,
        );
        return res.status(201).json(response);
      } else {
        throw result.error;
      }
    } catch (error) {
      const ans: ResponseInterface<string> = {
        message: "Error Occured",
        status: 0,
        data: customErrorMessgae(error),
      };
      return res.status(500).json(ans);
    }
  },

  async requestPurchase(req: Request, res: Response) {
    try {
      const requestSchema = z.object({
        productId: z.coerce.number(),
        requesterId: z.coerce.number(),
        amount: z.coerce.number().optional(),
        message: z.string().optional(),
      });

      const result = requestSchema.safeParse(req.body);
      if (result.success) {
        const { productId, requesterId, amount, message } = result.data;

        const response = await ProductService.requestPurchase(
          productId,
          requesterId,
          amount,
          message,
        );

        if (response.status) {
          return res.status(200).json(response);
        } else {
          return res.status(500).json(response);
        }
      } else {
        throw result.error;
      }
    } catch (error) {
      const ans: ResponseInterface<string> = {
        message: "Error Occured",
        status: 0,
        data: customErrorMessgae(error),
      };
      return res.status(500).json(ans);
    }
  },

  //updating the status of the request made to purchase the product
  async updatePurchaseProduct(req: Request, res: Response) {
    try {
      const requetstObject = z.object({
        UpdatedStatus: z.enum(
          RequestStatus,
          "Available values are PENDING , ACCEPTED , REJECTED  ",
        ),
        productId: z.number("Please provide a productID"),
      });

      const result = requetstObject.safeParse(req.body);

      if (result.success) {
        const { UpdatedStatus, productId } = result.data;
        const response = await ProductService.updatePurchaseProduct(
          UpdatedStatus,
          productId,
        );

        if (response.status) {
          res.status(200).json(response);
        } else {
          res.status(500).json(response);
        }
      } else {
        throw result.error;
      }
    } catch (error) {
      const ans: ResponseInterface<string> = {
        message: "Error Occured",
        status: 0,
        data: customErrorMessgae(error),
      };
      return res.status(500).json(ans);
    }
  },

  async purchaseProduct(req: Request, res: Response) {
    try {
      const purchaseObject = z.object({
        productId: z.number("Provide the ProductID"),
        purchaserId: z.number("Provide the PurchaserID"),
        ownerId: z.number("Provide the OwnerID"),
        paymentAmount: z.number("Provide the Payment Amount "),
        paymentMethod: z.string("Provide the Payment Method"),
        paymentStatus: z.enum(
          PaymentStatus,
          "Available status are PENDING , PAID , FAILED",
        ),
      });

      const result = purchaseObject.safeParse(req.body);

      if (result.success) {
        const {
          productId,
          purchaserId,
          ownerId,
          paymentAmount,
          paymentMethod,
          paymentStatus,
        } = result.data;
        const response = await ProductService.purchaseProduct(
          productId,
          purchaserId,
          ownerId,
          paymentAmount,
          paymentMethod,
          paymentStatus,
        );

        if (response.status) {
          return res.status(200).json(response);
        } else {
          res.status(500).json(response);
        }
      } else {
        throw result.error;
      }
    } catch (error) {
      const ans: ResponseInterface<string> = {
        message: "Error Occured",
        status: 0,
        data: customErrorMessgae(error),
      };
      return res.status(500).json(ans);
    }
  },

  //delete all product
  async deleteAll(req: Request, res: Response) {
    try {
      const owner = z.object({
        ownerId: z.coerce.number("Provide the owner Id"),
      });

      const result = owner.safeParse(req.params);
      console.log("====================================");
      console.log(req.params);
      console.log("====================================");

      if (result.success) {
        const { ownerId } = result.data;
        const response = await ProductService.deleteAll(ownerId);

        if (response.status) {
          return res.status(200).json(response);
        } else {
          res.status(500).json(response);
        }
      } else {
        throw result.error;
      }
    } catch (error) {
      const ans: ResponseInterface<string> = {
        message: "Error Occured",
        status: 0,
        data: customErrorMessgae(error),
      };
      return res.status(500).json(ans);
    }
  },

  async deleteProductById(req: Request, res: Response) {
    try {
      console.log(req.params.id);
      console.log(req.query);
      const product = z.object({
        productId: z.coerce.number("Provide the Product Id"),
      });

      const result = product.safeParse(req.params);
      if (result.success) {
        const { productId } = result.data;
        const response = await ProductService.deleteProductById(productId);

        if (response.status) {
          return res.status(200).json(response);
        } else {
          res.status(500).json(response);
        }
      } else {
        throw result.error;
      }
    } catch (error) {
      const ans: ResponseInterface<string> = {
        message: "Error Occured",
        status: 0,
        data: customErrorMessgae(error),
      };
      return res.status(500).json(ans);
    }
  },
};
