import express from 'express';
const app = express()

import dotenv from 'dotenv'
dotenv.config()

import mongoose from "mongoose";
// import User from './models/user.model.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRouter from './routes/authRouter.js'
import productRouter from './routes/productRouter.js'


const PORT = process.env.PORT || 5100


// connect to mongoDB
const mongoDB_URI = process.env.URI;

try {
    mongoose.connect(mongoDB_URI, {});
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

app.use(bodyParser.json());
app.use(cors());

 app.use("/auth", authRouter);
 app.use("/product", productRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})