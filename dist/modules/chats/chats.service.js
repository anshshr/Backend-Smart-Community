import { prisma } from "../../config/prisma.js";
export const ChatService = {
    // send a chat to a particular person for a particular product
    async sendMessage(productId, senderId, receiverId, message, images) {
        // if the product exist or not
        const product = await prisma.product.findUnique({
            where: {
                id: productId,
            },
        });
        if (!product || product == null) {
            const ans = {
                message: "Product do not exist",
                status: 0,
            };
            return ans;
        }
        // sender and receriver are valid and not same
        const sender = await prisma.user.findUnique({
            where: {
                id: senderId,
            },
        });
        if (!sender || sender == null) {
            const ans = {
                message: "Sender do not exist",
                status: 0,
            };
            return ans;
        }
        const receiver = await prisma.user.findUnique({
            where: {
                id: receiverId,
            },
        });
        if (!receiver || receiver == null) {
            const ans = {
                message: "Receiver do not exist",
                status: 0,
            };
            return ans;
        }
        if (senderId == receiverId) {
            const ans = {
                message: "Sender and  receiver can never be same",
                status: 0,
            };
            return ans;
        }
        const data = {};
        ((data.productId = productId),
            (data.senderId = senderId),
            (data.receiverId = receiverId));
        data.message = message;
        if (images)
            data.images = images;
        //send a chat
        const chat = await prisma.chat.create({
            data: data,
        });
        const ans = {
            message: "Message Sent Succesfully",
            status: 1,
            data: {
                messsage: chat,
            },
        };
        return ans;
    },
    // retrieve all chats of the particular person for a particular product
    async getMessages(productId, senderId, receiverId) {
        // if the product exist or not
        const product = await prisma.product.findUnique({
            where: {
                id: productId,
            },
        });
        if (!product || product == null) {
            const ans = {
                message: "Product do not exist",
                status: 0,
            };
            return ans;
        }
        // sender and receriver are valid and not same
        const sender = await prisma.user.findUnique({
            where: {
                id: senderId,
            },
        });
        if (!sender || sender == null) {
            const ans = {
                message: "Sender do not exist",
                status: 0,
            };
            return ans;
        }
        const receiver = await prisma.user.findUnique({
            where: {
                id: receiverId,
            },
        });
        if (!receiver || receiver == null) {
            const ans = {
                message: "Receiver do not exist",
                status: 0,
            };
            return ans;
        }
        if (senderId == receiverId) {
            const ans = {
                message: "Sender and  receiver can never be same",
                status: 0,
            };
            return ans;
        }
        // get all the messages
        const chats = await prisma.chat.findMany({
            where: {
                productId: productId,
                senderId: senderId,
                receiverId: receiverId,
            },
        });
        const ans = {
            message: "Chats retrieved Succesfully",
            status: 1,
            data: {
                messages: chats,
            },
        };
        return ans;
    },
};
//# sourceMappingURL=chats.service.js.map