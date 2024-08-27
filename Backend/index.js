import express from 'express';
const app = express()

import dotenv from 'dotenv'
dotenv.config()

import mongoose from "mongoose";
import User from './models/user.model.js';


const PORT = process.env.PORT || 5100


// connect to mongoDB
const mongoDB_URI = process.env.URI;

try {
    mongoose.connect(mongoDB_URI, {});
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}



app.use("/user", User);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})