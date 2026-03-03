import { prisma } from "../../config/prisma.js";
import { customErrorMessgae } from "../../core/errors/custom-error-message.js";
import getBoundingBox from "../../core/utility/bounding_box.js";
import { ProductStatus, RequestStatus, } from "../../generated/prisma/client.js";
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
        const response = {
            message: "Product Retrieved Succesfully",
            status: 1,
            data: {
                Products: products,
            },
        };
        return response;
    },
    // get a product with a particular id
    async getByParticularId(id) {
        const product = await prisma.product.findUnique({
            where: { id: id },
            include: {
                requests: true,
                purchase: true,
                owner: true,
            },
        });
        if (product != null) {
            const response = {
                message: "Product Retrieved Succesfully",
                status: 1,
                data: {
                    product: product,
                },
            };
            return response;
        }
        else {
            const response = {
                message: "No Product Found",
                status: 1,
                data: null,
            };
            return response;
        }
    },
    // get a product in the nearby locations(latitude and longitude ke nearet products)
    async getNearByProducts(latitude, longitude) {
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
        const response = {
            message: "Product Retrieved Succesfully",
            status: 1,
            data: {
                Products: products,
            },
        };
        return response;
    },
    // get and filter a particular product(baaed on price , status)
    async getByFilter(minPrice, maxPrice, status) {
        const where = {};
        if (status)
            where.status = status;
        if (minPrice !== undefined || maxPrice !== undefined) {
            where.price = {};
            if (minPrice !== undefined)
                where.price.gte = minPrice;
            if (maxPrice !== undefined)
                where.price.lte = maxPrice;
        }
        const products = await prisma.product.findMany({
            where: where,
            include: {
                requests: true,
                purchase: true,
                owner: true,
            },
        });
        const response = {
            message: "Product Retrieved Succesfully",
            status: 1,
            data: {
                Products: products,
            },
        };
        return response;
    },
    // create a product
    async createProduct(product, ownerId) {
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
        const response = {
            message: "Product Created Succesfully",
            status: 1,
            data: {
                Product: product,
            },
        };
        return response;
    },
    // requesting purchasing  a product and sending the notification
    async requestPurchase(productId, requesterId, amount, message) {
        try {
            // Validate input types
            if (!Number.isInteger(productId) || productId <= 0) {
                const response = {
                    message: "Invalid product ID",
                    status: 0,
                    data: null,
                };
                return response;
            }
            if (!Number.isInteger(requesterId) || requesterId <= 0) {
                const response = {
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
                const response = {
                    message: "Product not found",
                    status: 0,
                    data: null,
                };
                return response;
            }
            if (product.status === ProductStatus.SOLD) {
                const response = {
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
                const response = {
                    message: "Requester not found",
                    status: 0,
                    data: null,
                };
                return response;
            }
            // Validate amount if provided
            if (amount !== undefined && (amount <= 0 || isNaN(amount))) {
                const response = {
                    message: "Invalid amount provided",
                    status: 0,
                    data: null,
                };
                return response;
            }
            const data = {};
            data.productId = productId;
            data.requesterId = requesterId;
            if (amount !== undefined && amount !== null)
                data.amount = amount;
            if (message)
                data.message = message;
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
            const response = {
                message: "Product Requested Succesfully",
                status: 1,
                data: {
                    request: result,
                },
            };
            return response;
        }
        catch (error) {
            const response = {
                message: "Failed to create purchase request",
                status: 0,
                data: customErrorMessgae(error),
            };
            return response;
        }
    },
    //updating the status of the request made to purchase the product
    async updatePurchaseProduct(UpdatedStatus, productId) {
        // Validate that product exists and is available
        const product = await prisma.product.findUnique({
            where: { id: productId },
        });
        if (!product) {
            const response = {
                message: "Product not found",
                status: 0,
                data: null,
            };
            return response;
        }
        if (product.status === ProductStatus.SOLD) {
            const response = {
                message: "Product is already sold",
                status: 0,
                data: null,
            };
            return response;
        }
        // wrong request status transition
        if (UpdatedStatus == RequestStatus.ACCEPTED ||
            UpdatedStatus == RequestStatus.REJECTED) {
            const result = await prisma.purchaseRequest.updateMany({
                where: {
                    productId: productId,
                },
                data: {
                    status: UpdatedStatus,
                },
            });
            const response = {
                message: "Status Updated SuccesFully",
                status: 1,
            };
            return response;
        }
        else {
            const ans = {
                message: "Invalid Transition",
                status: 0,
            };
            return ans;
        }
    },
    // purchasing a product
    async purchaseProduct(productId, purchaserId, ownerId, paymentAmount, paymentMethod, paymentStatus) {
        // purchasing  a product that do not exist
        const product = await prisma.product.findUnique({
            where: {
                id: productId,
            },
        });
        if (!product || product == null) {
            const ans = {
                message: "Product do no exist",
                status: 0,
            };
            return ans;
        }
        // purchasing  a purchased  product
        if (product.status == ProductStatus.SOLD) {
            const ans = {
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
            const ans = {
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
            const ans = {
                message: "Purchaser do not exist",
                status: 0,
            };
        }
        // owner and the purhaser id cannot be same
        if (ownerId == purchaserId) {
            const ans = {
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
        const response = {
            message: "Product Purchased Succesfully",
            status: 1,
            data: {
                purchase: result,
            },
        };
        return response;
    },
    //delete all product
    async deleteAll(ownerId) {
        const owner = await prisma.user.findUnique({
            where: {
                id: ownerId,
            },
        });
        // owner do not exist
        if (!owner || owner == null) {
            const ans = {
                message: "Owner do not exist",
                status: 0,
            };
        }
        const result = await prisma.product.deleteMany({
            where: {
                ownerId: ownerId,
            },
        });
        const response = {
            message: "Products Deleted Succesfully",
            status: 1,
        };
        return response;
    },
    //delete a product with a id
    async deleteProductById(id) {
        // Validate that product exists and is available
        const product = await prisma.product.findUnique({
            where: { id: id },
        });
        if (!product) {
            const response = {
                message: "Product not found",
                status: 0,
                data: null,
            };
            return response;
        }
        else {
            const result = await prisma.product.delete({
                where: {
                    id: id,
                },
            });
            const response = {
                message: "Product Deleted Succesfully",
                status: 1,
                data: result,
            };
            return response;
        }
    },
};
//# sourceMappingURL=product.service.js.map