import type { ResponseInterface } from "../../core/interfaces/response_interface.js";
import type { Chat } from "../../generated/prisma/index.js";
export declare const ChatService: {
    sendMessage(productId: number, senderId: number, receiverId: number, message?: string, images?: string[]): Promise<ResponseInterface<null> | ResponseInterface<{
        messsage: Chat;
    }>>;
    getMessages(productId: number, senderId: number, receiverId: number): Promise<ResponseInterface<null> | ResponseInterface<{
        messages: Chat[];
    }>>;
};
//# sourceMappingURL=chats.service.d.ts.map