const express =require('express');
const router = express.Router();
const passport = require('passport');
const homeController = require('../controller/home_Controller');

// Home Router
router.get('/', homeController.home);
// Redirecting all the patients url to patient router file
router.use('/patients', require('./patients'));
// Redirecting all the reports url to reports router file
router.use('/reports', require('./reports'));
// Redirecting all the doctors url to doctors router file
router.use('/doctors', require('./doctors'));

// rxporting router for outer access
module.exports = router;
