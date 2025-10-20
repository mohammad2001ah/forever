import validator from "validator";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// route register
export const registerUser = async (req, res) => {
  try {
    const {name,email,password} = req.body;
    //validating email format
    if(!validator.isEmail(email)){
      return res.status(400).json({message:"Invalid email format"});
    }
    // validate password length
    if(password.length < 8){
      return res.status(400).json({message:"Password must be at least 8 characters long"});
    }
    // check if user exists
    const exists =await userModel.findOne({email});
    if(exists){
      return res.status(404).json({message:"User already exists"});
    }
    // compare password
    const hashedPassword = await bcrypt.hash(password,10);
  
    //create user
    const newUser= new userModel({
      name,
      email,
      password:hashedPassword
    });
  
    const user =await newUser.save();
  
    const token = jwt.sign(
      {userId:user._id,email:user.email},
      process.env.JWT_SECRET,
      {expiresIn:'1d'}
    );
    return res.status(201).json({message:"User registered successfully",user,token});
    console.log("done");
    
    } catch (error) {
      return res.status(500).json({message:"Server error",error:error.message});
    }
  
};

// rout login
export const loginUser =async(req,res)=>{
  
};

// route for admin login
export const adminLogin = async (req, res) => {};