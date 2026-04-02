const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  propertyId: { type: mongoose.Schema.Types.ObjectId, ref: "Property", required: true },
  amount: { type: Number, required: true },
  dueDate: { type: Date, required: true },
  paidDate: Date,
  status: { type: String, enum: ["paid", "pending", "late"], default: "pending" },
  receipt: String
});

module.exports = mongoose.model("Payment", paymentSchema);
