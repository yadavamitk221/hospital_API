const express =require('express');
const passport = require('passport');
const router = express.Router();
const doctorController = require('../controller/doctors_Controller');

router.post('/register', doctorController.registerDoctor);
router.get('/login', doctorController.create_session);


module.exports = router;