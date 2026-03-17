import { Router } from "express";
import ProductRouter from "./modules/products/product.route.js";
import chatRouter from "./modules/chats/chats.routes.js";
import { appMiddleware } from "./middlewares/app.middleware.js";
import authRouter from "./modules/auth/auth.routes.js";
const router = Router();
router.use("/auth", authRouter);
router.use(appMiddleware);
router.use("/product", ProductRouter);
router.use("/chat", chatRouter);
export default router;
//# sourceMappingURL=routes.js.map