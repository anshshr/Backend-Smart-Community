import type { Request, Response } from "express";
export declare const AuthController: {
    registerUser(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    loginUser(req: Request, res: Response): Promise<void>;
    logout(req: Request, res: Response): Promise<void>;
};
//# sourceMappingURL=auth.controller.d.ts.map