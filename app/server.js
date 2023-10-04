import express from "express";
import ApiRouteProducts from "../api/routes/api.routes.products.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use("/", express.static("public"));

app.use(ApiRouteProducts);

app.listen(3333);
