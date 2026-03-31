import express from "express";
const router = express.Router();

import ProductsController from "../controllers/ProductController.js";

router.get("/", ProductsController.showProducts);

export default router;
