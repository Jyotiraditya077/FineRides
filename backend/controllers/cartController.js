import userModel from "../models/userModel.js";

// Add to cart
const addToCart = async (req, res) => {
  try {
    const userData = await userModel.findById(req.userId);
    const cartData = userData.cartData || {};

    if (!cartData[req.body.vehicleId]) {
      cartData[req.body.vehicleId] = 1;
    } else {
      cartData[req.body.vehicleId] += 1;
    }

    await userModel.findByIdAndUpdate(req.userId, { cartData });
    res.json({ success: true, message: "Added To Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// Remove from cart
const removeFromCart = async (req, res) => {
  try {
    const userData = await userModel.findById(req.userId);
    const cartData = userData.cartData || {};

    if (cartData[req.body.vehicleId] > 0) {
      cartData[req.body.vehicleId] -= 1;
    }

    await userModel.findByIdAndUpdate(req.userId, { cartData });
    res.json({ success: true, message: "Removed From Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// Get cart
const getCart = async (req, res) => {
  try {
    const userData = await userModel.findById(req.userId);
    const cartData = userData.cartData || {};
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addToCart, removeFromCart, getCart };
