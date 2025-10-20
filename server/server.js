import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'dotenv/config';
import connectDB from './config/db.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';

// app configuration
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();
connectCloudinary();


// middleware
app.use(express.json());
app.use(cors());

//api endpoints
app.use('/api/user',userRouter);


// start server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});