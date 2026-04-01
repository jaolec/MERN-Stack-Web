const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    trim: true
  },
  unitNumber: {
    type: String,
    trim: true
  },
  bedrooms: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  squareFootage: {
    type: Number
  },
  amenities: [
    {
      type: String,
      trim: true    // ex. "Pool", "Gym", "Parking"
    }
  ],
  rules: [
    {
      type: String,
      trim: true    // ex. "No pets", "No smoking"
    }
  ],
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AdminProfile',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Property', propertySchema);
