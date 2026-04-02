const mongoose = require("mongoose");

const leaseSchema = new mongoose.Schema({
  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  propertyId: { type: mongoose.Schema.Types.ObjectId, ref: "Property", required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  monthlyRent: { type: Number, required: true },
  securityDeposit: Number,
  leaseDocument: String,
  status: { type: String, enum: ["active", "expired", "terminated"], default: "active" }
});

module.exports = mongoose.model("Lease", leaseSchema);
