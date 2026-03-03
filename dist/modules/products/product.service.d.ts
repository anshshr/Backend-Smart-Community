import type { ResponseInterface } from "../../core/interfaces/response_interface.js";
import { ProductStatus, RequestStatus, type PaymentStatus, type Product, type Purchase, type PurchaseRequest } from "../../generated/prisma/client.js";
import type { ProductDTO } from "./product.types.js";
export declare const ProductService: {
    getAllProducts(): Promise<ResponseInterface<{
        Products: Product[];
    }>>;
    getByParticularId(id: number): Promise<ResponseInterface<null> | ResponseInterface<{
        product: Product;
    }>>;
    getNearByProducts(latitude: number, longitude: number): Promise<ResponseInterface<{
        Products: Product[];
    }>>;
    getByFilter(minPrice?: number, maxPrice?: number, status?: ProductStatus): Promise<ResponseInterface<{
        Products: Product[];
    }>>;
    createProduct(product: ProductDTO, ownerId: number): Promise<ResponseInterface<{
        Product: ProductDTO;
    }>>;
    requestPurchase(productId: number, requesterId: number, amount?: number, message?: string): Promise<ResponseInterface<null> | ResponseInterface<string> | ResponseInterface<{
        request: PurchaseRequest;
    }>>;
    updatePurchaseProduct(UpdatedStatus: RequestStatus, productId: number): Promise<ResponseInterface<null>>;
    purchaseProduct(productId: number, purchaserId: number, ownerId: number, paymentAmount: number, paymentMethod: string, paymentStatus: PaymentStatus): Promise<ResponseInterface<null> | ResponseInterface<{
        purchase: Purchase;
    }>>;
    deleteAll(ownerId: number): Promise<ResponseInterface<null>>;
    deleteProductById(id: number): Promise<ResponseInterface<null> | ResponseInterface<{
        id: number;
        name: string;
        description: string;
        images: string[];
        latitude: number;
        longitude: number;
        address: string;
        price: number;
        status: import("../../generated/prisma/index.js").$Enums.ProductStatus;
        ownerId: number;
    }>>;
};
//# sourceMappingURL=product.service.d.ts.map