import type { Request, Response } from "express";
export declare const ProductController: {
    getAllProducts(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getByParticularId(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getNearByProducts(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getByFilter(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    createProduct(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    requestPurchase(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    updatePurchaseProduct(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    purchaseProduct(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    deleteAll(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    deleteProductById(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=product.controller.d.ts.map