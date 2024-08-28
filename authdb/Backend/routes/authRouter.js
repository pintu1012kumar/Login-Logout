import express from "express";
import { login, signup } from "../controllers/user.controller.js";
import { loginValidation, signupValidation } from "../middlewares/AuthValidation.js";
const router = express.Router();

router.post("/signup", signupValidation, signup);
router.post("/login",loginValidation, login);

export default router;
