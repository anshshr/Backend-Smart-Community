import type { Request, Response } from "express";
export declare const ChatController: {
    sendMessage(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    getMessages(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=chats.controller.d.ts.map