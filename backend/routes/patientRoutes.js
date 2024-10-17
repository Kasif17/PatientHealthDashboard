const express = require('express');
const { getAllPatients, getPatientDetails } = require('../controllers/patientController');
const router = express.Router();

router.get('/', getAllPatients);
router.get('/:id', getPatientDetails);

module.exports = router;
