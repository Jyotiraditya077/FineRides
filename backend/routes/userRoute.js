import express from 'express';
import { loginUser, registerUser } from '../controllers/userController.js';

const userRouter = express.Router();

// User Registration Route
userRouter.post("/register", registerUser);

// User Login Route
userRouter.post("/login", loginUser);

export default userRouter;
