import "dotenv/config.js";
import type { ResponseInterface } from "../../core/interfaces/response_interface.js";
export declare const AuthService: {
    registerUser(email: string, password: string): Promise<ResponseInterface<null>>;
    loginUser(username: string, email: string, password: string): Promise<ResponseInterface<null> | ResponseInterface<{
        token: string;
    }>>;
    logoutUser(token: string): Promise<ResponseInterface<null>>;
};
//# sourceMappingURL=auth.service.d.ts.map