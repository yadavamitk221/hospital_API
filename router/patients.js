const express =require('express');
const router = express.Router();
const passport = require('passport');
const patientController = require('../controller/patient_Controller');

router.post('/register', patientController.registerPatient);
router.post('/:id/create_report',passport.authenticate('jwt', {session: false}), patientController.create_report);
router.get('/:id/all_reports',passport.authenticate('jwt', {session: false}),patientController.all_reports);

module.exports = router;