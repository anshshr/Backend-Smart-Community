import type { NextFunction, Request, Response } from "express";
import "../config/env.js";
export declare const appMiddleware: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=app.middleware.d.ts.map