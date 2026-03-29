import { prisma } from "../../config/prisma.js";
import jwt from "jsonwebtoken";
import { hashPassword } from "../../utils/password_hash.js";
import "dotenv/config.js";
import { string } from "zod";
export const AuthService = {
    //register user
    async registerUser(email, password, FCMToken, username) {
        const res = await prisma.user.create({
            data: {
                username: username,
                email: email,
                password: await hashPassword(password),
                token: FCMToken,
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
            const accessToken = jwt.sign({
                id: registeredUser.id,
                email: email,
            }, process.env.ACCESS_TOKEN_SECRET || "", {
                expiresIn: "1 days",
            });
            const refreshToken = jwt.sign({
                id: registeredUser.id,
                email: email,
            }, process.env.REFRESH_TOKEN_SECRET || "", {
                expiresIn: "7 days",
            });
            const response = {
                message: "Login Succesfull",
                data: {
                    accessToken: accessToken,
                    refreshToken: refreshToken,
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
        const verify = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET || "");
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
    async refreshToken(token) {
        const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET || "");
        if (decoded) {
            const accessToken = jwt.sign({
                id: decoded.id,
                email: decoded.email,
            }, process.env.ACCESS_TOKEN_SECRET || "", {
                expiresIn: "1 days",
            });
            const refreshToken = jwt.sign({
                id: decoded.id,
                email: decoded.email,
            }, process.env.REFRESH_TOKEN_SECRET || "", {
                expiresIn: "7 days",
            });
            const response = {
                message: "Login Succesfull",
                data: {
                    email: decoded.email,
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                },
                status: 1,
            };
            return response;
        }
        else {
            const ans = {
                message: "Error Occured while refreshing the token",
                status: 0,
            };
            return ans;
        }
    }
};
//# sourceMappingURL=auth.service.js.map