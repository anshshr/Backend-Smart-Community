import { passwordRegex } from "../../utils/password_regex.js";
import { AuthService } from "./auth.service.js";
import * as z from "zod";
import type { Request, Response } from "express";
import type { ResponseInterface } from "../../core/interfaces/response_interface.js";

export const AuthController = {
  // register.
  async registerUser(req: Request, res: Response) {
    try {
      const user = z.object({
        email: z.string("Enter the correct value of the email"),
        password: z
          .string()
          .min(8, "Password must be at least 8 characters")
          .max(32, "Password must be less than 32 characters")
          .regex(passwordRegex, {
            message:
              "Password must contain at least one uppercase, lowercase, number, and special character",
          }),
      });
      const result = user.safeParse(req.body);

      if (result.success) {
        const { email, password } = req.body;
        const resposne = await AuthService.registerUser(email, password);

        return res.status(200).json(resposne);
      } else {
        throw result.error.issues;
      }
    } catch (error) {
      res.status(401).json({
        message: error,
        status: 0,
      });
    }
  },

  // login

  async loginUser(req: Request, res: Response) {
    try {
      const user = z.object({
        email: z.string("Enter the correct value of the email"),
        password: z
          .string()
          .min(8, "Password must be at least 8 characters")
          .max(32, "Password must be less than 32 characters")
          .regex(passwordRegex, {
            message:
              "Password must contain at least one uppercase, lowercase, number, and special character",
          }),
        username: z.string(),
      });

      const result = user.safeParse(req.body);
      if (result.success) {
        const { username, email, password } = req.body;
        const resposne = await AuthService.loginUser(username, email, password);
        if (resposne.status) {
          res.status(200).json(resposne);
        } else {
          res.status(401).json(resposne);
        }
      } else {
        throw result.error.issues;
      }
    } catch (error) {
      const ans: ResponseInterface<string> = {
        message: "Some Error Occured",
        data: error as string,
        status: 0,
      };
      res.status(401).json(ans);
    }
  },

  // logout
  async logout(req: Request, res: Response) {
    try {
      const { token } = req.body;
      const resposne = await AuthService.logoutUser(token);

      if (resposne.status) {
        res.status(200).json(resposne);
      } else {
        res.status(401).json(resposne);
      }
    } catch (error) {
      const ans: ResponseInterface<string> = {
        message: "Some Error Occured",
        data: "Invalid JWT",
        status: 0,
      };
      res.status(401).json(ans);
    }
  },
};
