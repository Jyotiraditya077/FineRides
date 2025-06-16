import 'dotenv/config';
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import vehicleRouter from "./routes/vehicleRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import connectCloudinary from "./config/cloudinary.js";

// app config
const app = express();
const port = process.env.PORT || 4000;

// middlewares
app.use(express.json());
app.use(cors());

// db & cloudinary connection
connectDB();
connectCloudinary();

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/vehicle", vehicleRouter);
app.use("/images", express.static('uploads'));
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// test route
app.get("/", (req, res) => {
  res.send("FineRides API is Running");
});

app.listen(port, () =>
  console.log(`🚗 FineRides server started on http://localhost:${port}`)
);
