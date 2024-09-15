import { Router } from "express";
import { Signup, Login } from "../controllers/auth.controller";

const router = Router();

// Signup user
router.route("/signup").post(Signup);

//Login user
router.route("/signin").post(Login);

export default router;