import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Config
const currency = "inr";
const frontend_URL = "http://localhost:5173";
const deliveryCharge = 0;

// ✅ Place Order (Online Payment)
const placeOrder = async (req, res) => {
  try {
    const userId = req.userId; // ✅ from authMiddleware
    const { items, amount, address } = req.body;

    const enhancedItems = items.map(item => ({
      ...item,
      durationHours: item.durationHours || 1, // ensure hours are stored in DB
    }));

    const newOrder = new orderModel({
      userId,
      items: enhancedItems,
      amount,
      address,
    });

    await newOrder.save();
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    const line_items = enhancedItems.map((item) => {
      const rate = Number(item.hourlyRate);
      const quantity = Number(item.durationHours) || 1;

      return {
        price_data: {
          currency,
          product_data: {
            name: item.name || "FineRides Vehicle",
          },
          unit_amount: isNaN(rate) ? 10000 : Math.round(rate * 100),
        },
        quantity,
      };
    });

    if (deliveryCharge > 0) {
      line_items.push({
        price_data: {
          currency,
          product_data: { name: "Delivery Charge" },
          unit_amount: deliveryCharge * 100,
        },
        quantity: 1,
      });
    }

    const session = await stripe.checkout.sessions.create({
      success_url: `${frontend_URL}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_URL}/verify?success=false&orderId=${newOrder._id}`,
      line_items,
      mode: "payment",
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.error("Stripe Error:", error.message);
    res.json({ success: false, message: "Error placing vehicle rental order" });
  }
};

// ✅ Place Order (Cash on Delivery)
const placeOrderCod = async (req, res) => {
  try {
    const userId = req.userId;
    const { items, amount, address } = req.body;

    const enhancedItems = items.map(item => ({
      ...item,
      durationHours: item.durationHours || 1,
    }));

    const newOrder = new orderModel({
      userId,
      items: enhancedItems,
      amount,
      address,
      payment: true,
    });

    await newOrder.save();
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Rental Order Placed (COD)" });
  } catch (error) {
    console.error("COD Order Error:", error.message);
    res.json({ success: false, message: "Error placing COD rental order" });
  }
};

// 🔐 Admin: List All Orders
const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, data: orders });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error fetching all rental orders" });
  }
};

// 👤 User: List Own Orders
const userOrders = async (req, res) => {
  try {
    const userId = req.userId || req.body.userId;
    const orders = await orderModel.find({ userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error fetching user rental history" });
  }
};

// ✏️ Update Order Status
const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status });
    res.json({ success: true, message: "Rental status updated" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error updating status" });
  }
};

// ✅ Stripe Order Payment Verification
const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({ success: true, message: "Payment verified" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Payment failed, order cancelled" });
    }
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Order verification error" });
  }
};

export {
  placeOrder,
  placeOrderCod,
  listOrders,
  userOrders,
  updateStatus,
  verifyOrder,
};
