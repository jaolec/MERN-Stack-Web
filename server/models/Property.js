const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  address: { type: String, required: true },
  unitNumber: String,
  bedrooms: Number,
  bathrooms: Number,
  squareFootage: Number,
  amenities: [String],
  rules: [String],
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Property", propertySchema);
