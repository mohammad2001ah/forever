import productModel from '../models/productModel.js';




// router for add product
export const addProduct=async(req,res)=>{
  try {
    const {name,description,price,category,subCategory,sizes,bestseller}=req.body;
    const image1=req.files?.image1?.[0];
    const image2=req.files?.image2?.[0];
    const image3=req.files?.image3?.[0];
    const image4=req.files?.image4?.[0];
    console.log(name,description,price,category,subCategory,sizes,bestseller);
    console.log(image1,image2,image3,image4);

    res.json({message:"Product added successfully"});
    

  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Error in adding product",error:error.message});
  }
};

// function for list of products
export const listProduct=async(req,res)=>{};

//function for removing product
export const removeProduct=async(req,res)=>{};


//function for single product details
export const singleProduct=async(req,res)=>{};