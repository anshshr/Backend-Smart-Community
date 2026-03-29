import "dotenv/config.js";
import type { ResponseInterface } from "../../core/interfaces/response_interface.js";
export declare const AuthService: {
    registerUser(email: string, password: string, FCMToken: string, username: string): Promise<ResponseInterface<null>>;
    loginUser(username: string, email: string, password: string): Promise<ResponseInterface<null> | ResponseInterface<{
        accessToken: string;
        refreshToken: string;
    }>>;
    logoutUser(token: string): Promise<ResponseInterface<null>>;
    refreshToken(token: string): Promise<ResponseInterface<null> | ResponseInterface<{
        accessToken: string;
        refreshToken: string;
        email: string;
    }>>;
};
//# sourceMappingURL=auth.service.d.ts.map