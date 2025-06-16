import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  hourlyRate: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true }, // e.g., Car, Bike
}, { timestamps: true });

const vehicleModel = mongoose.models.vehicle || mongoose.model("vehicle", vehicleSchema);
export default vehicleModel;
