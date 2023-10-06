import express from "express";
import * as controller from "../controllers/api.controller.products.js";
import * as controllerAdmin from "../controllers/api.controller.admin.js";

const route = express.Router();

route.get("/productos", controller.getProducts);
route.get("/productos/:id", controller.getProductsById);
route.get("/productos/type/:type", controller.getProductsByType);
route.post("/productos", controller.createProduct)
// Admin
route.get("/admin/dashboard", controllerAdmin.getUsers)

export default route;
