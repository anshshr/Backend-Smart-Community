import { prisma } from "../../config/prisma.js";
import getBoundingBox from "../../core/utility/bounding_box.js";
import { ProductStatus, } from "../../generated/prisma/client.js";
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
        if (minPrice && maxPrice) {
            where.minPrice = minPrice;
            where.maxPrice = maxPrice;
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
        const data = {};
        data.productId = productId;
        data.requesterId = requesterId;
        if (amount)
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
            message: "Product Created Succesfully",
            status: 1,
            data: {
                request: result,
            },
        };
        return response;
    },
    //updating the status of the request made to purchase the product
    async updatePurchaseProduct(UpdatedStatus, productId) {
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
    },
    // purchasing a product
    async purchaseProduct(productId, purchaserId, ownerId, paymentAmount, paymentMethod, paymentStatus) {
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
        const result = await prisma.product.deleteMany({
            where: {
                ownerId: ownerId,
            },
        });
        const response = {
            message: "Product Deleted Succesfully",
            status: 1,
        };
        return response;
    },
    //delete a product with a id
    async deleteProductById(id) {
        const result = await prisma.product.delete({
            where: {
                id: id,
            },
        });
        const response = {
            message: "Product Deleted Succesfully",
            status: 1,
        };
        return response;
    },
};
//# sourceMappingURL=product.service.js.map