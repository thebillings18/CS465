const express = require('express');
const router = express.Router();
const travelerController = require('../controllers/traveler');

router.get('/', travelerController.index);
router.get('/about', travelerController.about);
router.get('/tours', travelerController.tours);
router.get('/contact', travelerController.contact);

module.exports = router;
