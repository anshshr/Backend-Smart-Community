import jwt from "jsonwebtoken";
import "../config/env.js";
export const appMiddleware = (req, res, next) => {
    const headers = req.headers.authorization;
    const token = headers?.split(" ")[1];
    if (!token) {
        const response = {
            message: "Unauthoriozed",
            status: 0,
        };
        return res.status(401).json(response);
    }
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET || "");
        if (!decoded) {
            const ans = {
                message: "Token verification failed or you may be forbidden to access this endpoint",
                status: 0,
            };
            res.status(403).json(ans);
        }
        req.id = decoded.id;
        console.log("i ma from the middleware", req.id);
        next();
    }
    catch (error) {
        const ans = {
            message: "Token verification failed",
            status: 0,
        };
        res.status(404).json(ans);
    }
};
//# sourceMappingURL=app.middleware.js.map