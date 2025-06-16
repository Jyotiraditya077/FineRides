import express from 'express';
import { addToCart, getCart, removeFromCart } from '../controllers/cartController.js';
import authMiddleware from '../middleware/auth.js';

const cartRouter = express.Router();

// Get user's cart
cartRouter.post("/get", authMiddleware, getCart);

// Add a vehicle to cart
cartRouter.post("/add", authMiddleware, addToCart);

// Remove a vehicle from cart
cartRouter.post("/remove", authMiddleware, removeFromCart);

export default cartRouter;
