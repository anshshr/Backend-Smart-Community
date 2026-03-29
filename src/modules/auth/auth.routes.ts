import { Router    } from "express";
import { AuthController } from "./auth.controller.js";

const authRouter  = Router()

authRouter.post("/register" , AuthController.registerUser);
authRouter.post("/login" ,AuthController.loginUser)
authRouter.post("/logout" ,AuthController.logout)
authRouter.post("/refreshToken" ,AuthController.refreshTokenContorller)

export default authRouter