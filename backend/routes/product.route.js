import express from "express";

import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";
const router= express.Router();




router.get("/",getProducts);

// patch for single key update 
// put for whole update
router.put("/:id",updateProduct);


router.post("/",createProduct);

router.delete("/:id",deleteProduct);

export default router;