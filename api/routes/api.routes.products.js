import express from "express";
import * as controller from "../controllers/api.controller.products.js";

const route = express.Router();

route.get("/productos", controller.getProducts);
route.get("/productos/:id", controller.getProductsById);
route.post("/productos", controller.createProduct)

export default route;
