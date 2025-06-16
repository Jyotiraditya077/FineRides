import express from "express";
import { addVehicle, listVehicles, removeVehicle } from "../controllers/vehicleController.js";
import upload from "../middleware/multer.js";

const vehicleRouter = express.Router();

// Add a new vehicle listing
vehicleRouter.post("/add", upload.single("image"), addVehicle);

// List all available vehicles
vehicleRouter.get("/list", listVehicles);

// Remove a vehicle by ID
vehicleRouter.post("/remove/:id", removeVehicle);

export default vehicleRouter;
