import express from 'express';
import authMiddleware from '../middleware/auth.js';
import { 
  listOrders, 
  placeOrder, 
  updateStatus, 
  userOrders, 
  verifyOrder, 
  placeOrderCod 
} from '../controllers/orderController.js';

const orderRouter = express.Router();

// ✅ Protected: Admin: List all vehicle rental orders
orderRouter.get("/list", authMiddleware, listOrders);

// User: Get own vehicle rental history
orderRouter.post("/userorders", authMiddleware, userOrders);

// User: Place rental order with online payment
orderRouter.post("/place", authMiddleware, placeOrder);

// Admin/User: Update rental order status
orderRouter.post("/status", updateStatus);

// Payment gateway verification
orderRouter.post("/verify", verifyOrder);

// User: Place rental order with Cash on Delivery
orderRouter.post("/placecod", authMiddleware, placeOrderCod);

export default orderRouter;
