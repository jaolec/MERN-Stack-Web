const mongoose = require("mongoose");

const battleSchema = new mongoose.Schema({
  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  propertyId: { type: mongoose.Schema.Types.ObjectId, ref: "Property", required: true },
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  subject: { type: String, required: true },
  location: String,
  date: Date,
  time: String,
  status: { type: String, enum: ["pending", "scheduled", "completed", "cancelled"], default: "pending" },
  outcome: String
});

module.exports = mongoose.model("Battle", battleSchema);
