import type { NextFunction, Request, Response } from "express";
import type { ResponseInterface } from "../core/interfaces/response_interface.js";
import jwt from "jsonwebtoken";

export const appMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const headers = req.headers.authorization;
  const token = headers?.split(" ")[1];

  if (!token) {
    const response: ResponseInterface<null> = {
      message: "Unauthoriozed",
      status: 0,
    };

    return res.status(401).json(response);
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "ANSH") as {
      id: number;
      email: string;
    };
    req.id = decoded.id;
    next();
  } catch (error) {
    const ans: ResponseInterface<null> = {
      message: "Token verification failed",
      status: 0,
    };
    res.status(404).json(ans);
  }
};
