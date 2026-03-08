import { Router } from "express";
import authRouter from "./modules/auth/auth.routes.js";
import ProductRouter from "./modules/products/product.route.js";
import chatRouter from "./modules/chats/chats.routes.js";
import { appMiddleware } from "./middlewares/app.middleware.js";

const router = Router();

router.use("/auth", authRouter);
router.use(appMiddleware);
router.use("/product", ProductRouter);
router.use("/chat", chatRouter);
export default router;
