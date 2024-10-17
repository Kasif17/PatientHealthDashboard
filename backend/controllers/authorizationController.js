const AuthorizationRequest = require('../models/AuthorizationRequest');

exports.submitAuthorizationRequest = async (req, res) => {
  try {
    const { patientId, treatment, insurancePlan, dateOfService, diagnosisCode } = req.body;
    const newRequest = new AuthorizationRequest({
      patientId,
      treatment,
      insurancePlan,
      dateOfService,
      diagnosisCode,
    });
    await newRequest.save();
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getAuthorizationRequests = async (req, res) => {
  try {
    const requests = await AuthorizationRequest.find().populate('patientId');
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
