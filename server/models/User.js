const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["tenant", "admin"], required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  emergencyContact: {
    name: String,
    phone: String,
    relationship: String
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
