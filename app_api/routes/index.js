const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

// list all trips
router.route('/trips').get(tripsController.tripsList);

// find trip using parameter
router.route('/trips/:tripCode').get(tripsController.tripsFindByCode);

module.exports = router;
