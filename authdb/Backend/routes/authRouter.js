import express from "express";
import { signup } from "../controllers/user.controller.js";
import { signupValidation } from "../middlewares/AuthValidation.js";
const router = express.Router();

router.post("/signup", signupValidation, signup);
//router.post("/login", login);

export default router;
