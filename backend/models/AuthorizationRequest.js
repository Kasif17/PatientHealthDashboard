const mongoose = require('mongoose');

const authorizationRequestSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  treatment: String,
  insurancePlan: String,
  dateOfService: Date,
  diagnosisCode: String,
  status: {
    type: String,
    enum: ['pending', 'approved', 'denied'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('AuthorizationRequest', authorizationRequestSchema);
