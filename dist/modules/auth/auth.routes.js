import { Router } from "express";
import { AuthController } from "./auth.controller.js";
const authRouter = Router();
authRouter.post("/register", AuthController.registerUser);
authRouter.post("/login", AuthController.loginUser);
authRouter.post("/logout", AuthController.logout);
export default authRouter;
//# sourceMappingURL=auth.routes.js.map