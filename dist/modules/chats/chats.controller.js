import * as z from "zod";
import { ChatService } from "./chats.service.js";
import { customErrorMessgae } from "../../core/errors/custom-error-message.js";
import { error, log } from "node:console";
export const ChatController = {
    // send a message
    async sendMessage(req, res) {
        try {
            const message = z.object({
                productId: z.coerce.number("Please Provide the product Id"),
                senderId: z.coerce.number("Please Provide the sender Id"),
                receiverId: z.coerce.number("Please Provide the receiver Id"),
                messages: z.string("Please Provide message"),
                images: z.array(z.string()).optional(),
            });
            const result = message.safeParse(req.body);
            if (result.success) {
                const { productId, senderId, receiverId, messages, images } = result.data;
                const response = await ChatService.sendMessage(productId, senderId, receiverId, messages, images);
                if (response.status) {
                    res.status(200).json(response);
                }
                else {
                    res.status(500).json(response);
                }
            }
            else {
                throw result.error;
            }
        }
        catch (error) {
            const ans = {
                message: "Error Occured",
                status: 0,
                data: customErrorMessgae(error),
            };
            return res.status(500).json(ans);
        }
    },
    // get a message
    async getMessages(req, res) {
        try {
            const message = z.object({
                productId: z.coerce.number("Please Provide the product Id"),
                senderId: z.coerce.number("Please Provide the sender Id"),
                receiverId: z.coerce.number("Please Provide the receiver Id"),
            });
            const result = message.safeParse(req.query);
            console.log(result);
            if (result.success) {
                const { productId, senderId, receiverId } = result.data;
                const response = await ChatService.getMessages(productId, senderId, receiverId);
                if (response.status) {
                    res.status(200).json(response);
                }
                else {
                    res.status(500).json(response);
                }
            }
            else {
                throw result.error;
            }
        }
        catch (error) {
            const ans = {
                message: "Error Occured",
                status: 0,
                data: customErrorMessgae(error),
            };
            return res.status(500).json(ans);
        }
    },
};
//# sourceMappingURL=chats.controller.js.map