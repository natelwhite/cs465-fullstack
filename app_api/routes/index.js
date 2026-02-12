const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

// list all trips
router.route('/trips')
	.get(tripsController.tripsList) // GET Method routes tripList
	.post(tripsController.tripsAddTrip) // POST Method Adds a Trip

// find trip using parameter
router.route('/trips/:tripCode')
	.get(tripsController.tripsFindByCode)
	.put(tripsController.tripsUpdateTrip);

module.exports = router;
