const express = require('express');
const apiHelpers = require('./helpers.js');
const flights = require('./flights.js');

const router = express.Router();

router.get('/flights', flights.getRoutes);

router.get('/hotels', (req, res) => { res.status(200).send('Received hotels request')});

router.get('/events', (req, res) => { apiHelpers.getEvents(req, res) });



module.exports = router;
