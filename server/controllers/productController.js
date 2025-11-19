import productModel from '../models/productModel.js';
import { v2 as cloudinary } from 'cloudinary';



// router for add product
export const addProduct = async (req, res) => {
  try {
    const {name, description, price, category, subCategory, sizes, bestseller} = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    console.log("BODY:", req.body);
    console.log("FILES:", req.files);
    console.log(name, description, price, category, subCategory, sizes, bestseller);

    // جمع الصور أولًا
    const images = [image1, image2, image3, image4].filter(item => item !== undefined);
    console.log(images);

    // بعدين ارفع الصور لـ Cloudinary
    const imagesUrl = await Promise.all(
      images.map(async (item) => {
        const result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
        return result.secure_url;
      })
    );

    const productData = new productModel({
      name,
      description,
      price,
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestseller: bestseller === 'true',
      images: imagesUrl,
      date:Date.now()
    });
    await productData.save();


    console.log("Uploaded URLs:", imagesUrl);

    res.json({ message: "Product added successfully", imagesUrl });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error in adding product", error: error.message });
  }
};


// function for list of products
export const listProduct=async(req,res)=>{
  try {
    const products=await productModel.find().sort({date:-1});
    res.json(products);
  } catch (error) {
    res.status(500).json({message:"Error in fetching products",error:error.message});
  }
};

//function for removing product
export const removeProduct=async(req,res)=>{
  try {
    const {id}=req.params;
    await productModel.findByIdAndDelete(req.body.id);
    res.json({message:"Product removed successfully"});
  } catch (error) {
    res.status(500).json({message:"Error in removing product",error:error.message});
  }
};


//function for single product details
export const singleProduct=async(req,res)=>{
  try {
    const {productId}=req.params;
    const product=await productModel.findById(productId);
    res.json(product);
  } catch (error) {
    res.status(500).json({message:"Error in fetching product details",error:error.message});
  }
};