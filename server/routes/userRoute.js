import express from "express";
import {
  loginUser,
  registerUser,
  adminLogin,
} from "../controllers/userController.js";

const router = express.Router();
// routes for user registration
router.post("/register", registerUser);
// user login route
router.post("/login", loginUser);
// admin login route
router.post("/admin-login", adminLogin);

export default router;
