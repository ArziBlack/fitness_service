import { Router } from "express";
import { Signup, Login } from "../controllers/auth.controller";

const router = Router();

// Signup Lecturer
router.route("/signup").post(Signup);

//Login Lecturer
router.route("/signin").post(Login);

export default router;