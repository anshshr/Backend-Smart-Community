import { prisma } from "../../config/prisma.js";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { hashPassword } from "../../utils/password_hash.js";
import "dotenv/config.js";
export const AuthService = {
    //register user
    async registerUser(email, password) {
        const res = await prisma.user.create({
            data: {
                email: email,
                password: await hashPassword(password),
            },
        });
        const result = {
            message: "User Registerd Succesfully",
            status: 1,
        };
        return result;
    },
    //login user
    async loginUser(username, email, password) {
        const registeredUser = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        if (registeredUser != null) {
            const token = jwt.sign({
                email: email,
                password: password,
            }, process.env.JWT_SECRET || "ANSH");
            const response = {
                message: "Login Succesfull",
                data: {
                    token: token,
                },
                status: 1,
            };
            return response;
        }
        else {
            const ans = {
                message: "Either the email of the password can  be wrong",
                status: 0,
            };
            return ans;
        }
    },
    //logout user
    async logoutUser(token) {
        const verify = jwt.verify(token, process.env.JWT_SECRET || "ANSH");
        if (verify) {
            const ans = {
                message: "Logout Successfull",
                status: 1,
            };
            return ans;
        }
        else {
            const ans = {
                message: "Error Occured while doing the logout",
                status: 1,
            };
            return ans;
        }
    },
};
//# sourceMappingURL=auth.service.js.map