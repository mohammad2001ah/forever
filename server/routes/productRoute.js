import express from "express";
import { addProduct,removeProduct,singleProduct,listProduct } from '../controllers/productController.js';
import upload from "../middleware/multer.js";
const router=express.Router();
// route for add product

router.post("/test", upload.single("file"), (req, res) => {
  console.log("BODY:", req.body);
  console.log("FILE:", req.file);
  res.send("Upload OK");
});


router.post("/add",upload.fields([
  {name:"image1",maxCount:1},
  {name:"image2",maxCount:1},
  {name:"image3",maxCount:1},
  {name:"image4",maxCount:1},]),addProduct);
// route for list of products
router.get("/list",listProduct);
// route for remove product
router.post("/remove",removeProduct);
// route for single product details
router.get("/single/:id",singleProduct);

export default router;