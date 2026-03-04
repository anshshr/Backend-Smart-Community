import { Router } from "express";
import { ChatController } from "./chats.controller.js";

const chatRouter = Router();

chatRouter.post("/send", ChatController.sendMessage);
chatRouter.get("/get", ChatController.getMessages);

export default chatRouter;
