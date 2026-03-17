import jwt from "jsonwebtoken";
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
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "ANSH");
        req.id = decoded.id;
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