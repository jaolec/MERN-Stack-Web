const mongoose = require('mongoose');

const battleSchema = new mongoose.Schema({
  tenantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TenantProfile',
    required: true
  },
  propertyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property',
    required: true
  },
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AdminProfile',
    required: true
  },
  subject: {
    type: String,
    required: true,
    trim: true    // ex. "Rent increase dispute", "Noise complaint"
  },
  location: {
    type: String,
    required: true,
    trim: true    // address of where the meeting takes place
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true,
    trim: true    // ex. "3:00 PM"
  },
  status: {
    type: String,
    enum: ['pending', 'scheduled', 'completed', 'cancelled'],
    default: 'pending'
  },
  outcome: {
    type: String,
    trim: true    // notes filled in after the battle is completed
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Battle', battleSchema);
