import {Router} from "express"
import authRouter from "./modules/auth/auth.routes.js";
import ProductRouter from "./modules/products/product.route.js";

const router = Router();


router.use("/auth" , authRouter)
router.use("/product" , ProductRouter)

export default router;