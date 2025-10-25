import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

// app configuration
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();
connectCloudinary();


// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//api endpoints
app.use('/api/product',productRouter);
app.use('/api/user',userRouter);


// start server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});