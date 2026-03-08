import { prisma } from "../../config/prisma.js";
import type { User, UserVisibility } from "../../generated/prisma/client.js";
import jwt from "jsonwebtoken";
import { hashPassword } from "../../utils/password_hash.js";
import "dotenv/config.js";
import type { ResponseInterface } from "../../core/interfaces/response_interface.js";

export const AuthService = {
  //register user
  async registerUser(email: string, password: string, FCMToken: string) {
    const res = await prisma.user.create({
      data: {
        email: email,
        password: await hashPassword(password),
        token: FCMToken,
      },
    });

    const result: ResponseInterface<null> = {
      message: "User Registerd Succesfully",
      status: 1,
    };
    return result;
  },

  //login user
  async loginUser(username: string, email: string, password: string) {
    const registeredUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (registeredUser != null) {
      const token = jwt.sign(
        {
          id: registeredUser.id,
          email: email,
        },
        process.env.JWT_SECRET || "ANSH",
      );
      const response: ResponseInterface<{ token: string }> = {
        message: "Login Succesfull",
        data: {
          token: token,
        },
        status: 1,
      };

      return response;
    } else {
      const ans: ResponseInterface<null> = {
        message: "Either the email of the password can  be wrong",
        status: 0,
      };

      return ans;
    }
  },

  //logout user
  async logoutUser(token: string) {
    const verify = jwt.verify(token, process.env.JWT_SECRET || "ANSH");

    if (verify) {
      const ans: ResponseInterface<null> = {
        message: "Logout Successfull",
        status: 1,
      };

      return ans;
    } else {
      const ans: ResponseInterface<null> = {
        message: "Error Occured while doing the logout",
        status: 1,
      };

      return ans;
    }
  },
};
