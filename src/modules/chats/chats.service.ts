import { prisma } from "../../config/prisma.js";
import type { ResponseInterface } from "../../core/interfaces/response_interface.js";
import type { Chat } from "../../generated/prisma/index.js";

export const ChatService = {
  // send a chat to a particular person for a particular product
  async sendMessage(
    productId: number,
    senderId: number,
    receiverId: number,
    message?: string,
    images?: string[],
  ) {
    // if the product exist or not
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!product || product == null) {
      const ans: ResponseInterface<null> = {
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
      const ans: ResponseInterface<null> = {
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
      const ans: ResponseInterface<null> = {
        message: "Receiver do not exist",
        status: 0,
      };
      return ans;
    }

    if (senderId == receiverId) {
      const ans: ResponseInterface<null> = {
        message: "Sender and  receiver can never be same",
        status: 0,
      };
      return ans;
    }

    const data: any = {};
    ((data.productId = productId),
      (data.senderId = senderId),
      (data.receiverId = receiverId));
    data.message = message;
    if (images) data.images = images;

    //send a chat
    const chat = await prisma.chat.create({
      data: data,
    });

    const ans: ResponseInterface<{ messsage: Chat }> = {
      message: "Message Sent Succesfully",
      status: 1,
      data: {
        messsage: chat,
      },
    };

    return ans;
  },

  // retrieve all chats of the particular person for a particular product
  async getMessages(productId: number, senderId: number, receiverId: number) {
    // if the product exist or not
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!product || product == null) {
      const ans: ResponseInterface<null> = {
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
      const ans: ResponseInterface<null> = {
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
      const ans: ResponseInterface<null> = {
        message: "Receiver do not exist",
        status: 0,
      };
      return ans;
    }

    if (senderId == receiverId) {
      const ans: ResponseInterface<null> = {
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

    const ans: ResponseInterface<{ messages: Chat[] }> = {
      message: "Chats retrieved Succesfully",
      status: 1,
      data: {
        messages: chats,
      },
    };

    return ans;
  },
};
