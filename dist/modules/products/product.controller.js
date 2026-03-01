import { PaymentStatus, ProductStatus, RequestStatus, } from "../../generated/prisma/client.js";
import { ProductService } from "./product.service.js";
import * as z from "zod";
export const ProductController = {
    // get all the services
    async getAllProducts(req, res) {
        try {
            const response = await ProductService.getAllProducts();
            return res.status(200).json(response);
        }
        catch (error) {
            const ans = {
                message: "Error Occured",
                status: 0,
                data: error,
            };
            return res.status(500).json(ans);
        }
    },
    // get a product with a particular id
    async getByParticularId(req, res) {
        try {
            const products = z.object({
                id: z.string().transform(Number),
            });
            const result = products.safeParse(req.params);
            if (result.success) {
                const { id } = result.data;
                const response = await ProductService.getByParticularId(id);
                return res.status(200).json(response);
            }
            else {
                const ans = {
                    message: "Invalid input",
                    status: 0,
                    data: JSON.stringify(result.error.issues),
                };
                return res.status(400).json(ans);
            }
        }
        catch (error) {
            const ans = {
                message: "Error Occured",
                status: 0,
                data: error,
            };
            return res.status(500).json(ans);
        }
    },
    // get a product in the nearby locations(latitude and longitude ke nearet products)
    async getNearByProducts(req, res) {
        try {
            const product = z.object({
                latitude: z.coerce.number(),
                longitude: z.coerce.number(),
            });
            const result = product.safeParse(req.query);
            if (result.success) {
                const { latitude, longitude } = result.data;
                const response = await ProductService.getNearByProducts(latitude, longitude);
                return res.status(200).json(response);
            }
            else {
                const ans = {
                    message: "Invalid input",
                    status: 0,
                    data: JSON.stringify(result.error.issues),
                };
                return res.status(400).json(ans);
            }
        }
        catch (error) {
            const ans = {
                message: "Error Occured",
                status: 0,
                data: error,
            };
            return res.status(500).json(ans);
        }
    },
    // get and filter a particular product(baaed on price , status)
    async getByFilter(req, res) {
        try {
            const data = z.object({
                minPrice: z.coerce.number(),
                maxPrice: z.coerce.number(),
                status: z.enum(ProductStatus),
            });
            const result = data.safeParse(req.query);
            if (result.success) {
                const { minPrice, maxPrice, status } = result.data;
                const response = await ProductService.getByFilter(minPrice, maxPrice, status);
                return res.status(200).json(response);
            }
            else {
                const ans = {
                    message: "Invalid input",
                    status: 0,
                    data: JSON.stringify(result.error.issues),
                };
                return res.status(400).json(ans);
            }
        }
        catch (error) {
            const ans = {
                message: "Error Occured",
                status: 0,
                data: error,
            };
            return res.status(500).json(ans);
        }
    },
    // create a product
    async createProduct(req, res) {
        try {
            const productSchema = z.object({
                name: z.string(),
                description: z.string(),
                images: z.array(z.string()),
                latitude: z.number(),
                longitude: z.number(),
                address: z.string(),
                price: z.number(),
            });
            const result = productSchema.safeParse(req.body);
            if (result.success) {
                const userId = req.user?.id;
                if (!userId) {
                    const ans = {
                        message: "User not authenticated",
                        status: 0,
                        data: "Missing user context",
                    };
                    return res.status(401).json(ans);
                }
                const response = await ProductService.createProduct(result.data, userId);
                return res.status(201).json(response);
            }
            else {
                const ans = {
                    message: "Invalid input",
                    status: 0,
                    data: JSON.stringify(result.error.issues),
                };
                return res.status(400).json(ans);
            }
        }
        catch (error) {
            const ans = {
                message: "Error Occured",
                status: 0,
                data: error,
            };
            return res.status(500).json(ans);
        }
    },
    async requestPurchase(req, res) {
        try {
            const requestSchema = z.object({
                productId: z.number(),
                requesterId: z.number(),
                amount: z.number().optional(),
                message: z.string().optional(),
            });
            const result = requestSchema.safeParse(req.body);
            if (result.success) {
                const { productId, requesterId, amount, message } = result.data;
                const response = await ProductService.requestPurchase(productId, requesterId, amount, message);
                return res.status(200).json(response);
            }
            else {
                const ans = {
                    message: "Invalid input",
                    status: 0,
                    data: JSON.stringify(result.error.issues),
                };
                return res.status(400).json(ans);
            }
        }
        catch (error) {
            const ans = {
                message: "Error Occured",
                status: 0,
                data: error,
            };
            return res.status(500).json(ans);
        }
    },
    //updating the status of the request made to purchase the product
    async updatePurchaseProduct(req, res) {
        try {
            const requetstObject = z.object({
                UpdatedStatus: z.enum(RequestStatus),
                productId: z.number(),
            });
            const result = requetstObject.safeParse(req.body);
            if (result.success) {
                const { UpdatedStatus, productId } = result.data;
                const response = await ProductService.updatePurchaseProduct(UpdatedStatus, productId);
                res.status(200).json(response);
            }
            else {
                const ans = {
                    message: "Invalid input",
                    status: 0,
                    data: JSON.stringify(result.error.issues),
                };
                return res.status(400).json(ans);
            }
        }
        catch (error) {
            const ans = {
                message: "Error Occured",
                status: 0,
                data: error,
            };
            return res.status(500).json(ans);
        }
    },
    async purchaseProduct(req, res) {
        try {
            const purchaseObject = z.object({
                productId: z.number(),
                purchaserId: z.number(),
                ownerId: z.number(),
                paymentAmount: z.number(),
                paymentMethod: z.string(),
                paymentStatus: z.enum(PaymentStatus),
            });
            const result = purchaseObject.safeParse(req.body);
            if (result.success) {
                const { productId, purchaserId, ownerId, paymentAmount, paymentMethod, paymentStatus, } = result.data;
                const response = await ProductService.purchaseProduct(productId, purchaserId, ownerId, paymentAmount, paymentMethod, paymentStatus);
                return res.status(200).json(response);
            }
            else {
                const ans = {
                    message: "Invalid input",
                    status: 0,
                    data: JSON.stringify(result.error.issues),
                };
                return res.status(400).json(ans);
            }
        }
        catch (error) {
            const ans = {
                message: "Error Occured",
                status: 0,
                data: error,
            };
            return res.status(500).json(ans);
        }
    },
    //delete all product
    async deleteAll(req, res) {
        try {
            const owner = z.object({
                ownerId: z.number(),
            });
            const result = owner.safeParse(req.query);
            if (result.success) {
                const { ownerId } = result.data;
                const response = await ProductService.deleteAll(ownerId);
            }
            else {
                const ans = {
                    message: "Invalid input",
                    status: 0,
                    data: JSON.stringify(result.error.issues),
                };
                return res.status(400).json(ans);
            }
        }
        catch (error) {
            const ans = {
                message: "Error Occured",
                status: 0,
                data: error,
            };
            return res.status(500).json(ans);
        }
    },
    async deleteProductById(req, res) {
        try {
            const owner = z.object({
                id: z.number(),
            });
            const result = owner.safeParse(req.query);
            if (result.success) {
                const { id } = result.data;
                const response = await ProductService.deleteAll(id);
            }
            else {
                const ans = {
                    message: "Invalid input",
                    status: 0,
                    data: JSON.stringify(result.error.issues),
                };
                return res.status(400).json(ans);
            }
        }
        catch (error) {
            const ans = {
                message: "Error Occured",
                status: 0,
                data: error,
            };
            return res.status(500).json(ans);
        }
    },
};
//# sourceMappingURL=product.controller.js.map