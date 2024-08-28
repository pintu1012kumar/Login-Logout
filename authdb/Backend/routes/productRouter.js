import express from "express";
import { ensureAuthenticated } from "../middlewares/Auth.js";

const router = express.Router();

router.get("/", ensureAuthenticated , (req,res)=>{
    res.status(200).json([
        {
            name:"mobile",
            price:10000
        },
        {
            name:"tv",
            price:20000
        }
    ])
});

export default router;
