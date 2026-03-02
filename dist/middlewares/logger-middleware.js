export const loggerMiddlerware = (req, res, next) => {
    console.log("====================================");
    console.log(req);
    console.log("====================================");
    next();
};
//# sourceMappingURL=logger-middleware.js.map