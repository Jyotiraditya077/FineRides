import vehicleModel from "../models/vehicleModel.js";
import fs from "fs";
import pkg from "cloudinary";
const { v2: cloudinary } = pkg;

// Add vehicle
const addVehicle = async (req, res) => {
  try {
    const image_filename = req.file.path;
    const imageUpload = await cloudinary.uploader.upload(image_filename, { resource_type: "image" });
    const imageUrl = imageUpload.secure_url;
    console.log(imageUrl);

    const vehicle = new vehicleModel({
      name: req.body.name,
      description: req.body.description,
      hourlyRate: req.body.hourlyRate,
      category: req.body.category,
      image: imageUrl,
    });

    await vehicle.save();
    res.json({ success: true, message: "Vehicle added" });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: "Vehicle not added", error: err.message });
  }
};

// List all vehicles
const listVehicles = async (req, res) => {
  try {
    const vehicles = await vehicleModel.find({});
    res.json({ success: true, data: vehicles });
  } catch (e) {
    console.error(e);
    res.json({ success: false, message: "Error retrieving vehicle listings", error: e.message });
  }
};

// Remove vehicle
const removeVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await vehicleModel.findByIdAndDelete(id);

    const publicId = vehicle.image.split('/').pop().split('.')[0];
    await cloudinary.uploader.destroy(publicId);

    const localFilePath = vehicle.image;
    try {
      await fs.promises.unlink(localFilePath);
    } catch (unlinkErr) {
      console.error('Error deleting local file:', unlinkErr.message);
    }

    res.json({ success: true, message: "Vehicle successfully removed" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error removing vehicle", error: err.message });
  }
};

export { addVehicle, listVehicles, removeVehicle };
