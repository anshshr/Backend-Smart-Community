import express from "express";
import { ProductController } from "./product.controller.js";
const ProductRouter = express.Router();
ProductRouter.get("/", ProductController.getAllProducts);
ProductRouter.get("/:id", ProductController.getByParticularId);
ProductRouter.get("/nearest", ProductController.getNearByProducts);
ProductRouter.get("/filter", ProductController.getByFilter);
ProductRouter.post("/create", ProductController.createProduct);
ProductRouter.post("/request", ProductController.requestPurchase);
ProductRouter.patch("/update", ProductController.updatePurchaseProduct);
ProductRouter.post("/purchase", ProductController.purchaseProduct);
ProductRouter.delete("/:ownerId", ProductController.deleteAll);
ProductRouter.delete("/:id", ProductController.deleteProductById);
export default ProductRouter;
//# sourceMappingURL=product.route.js.map