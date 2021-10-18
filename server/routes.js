const express = require('express');
const apiHelpers = require('./helpers.js');

const router = express.Router();

router.get('/flights', (req, res) => { res.status(200).send('Received flights request')});

router.get('/hotels', (req, res) => { res.status(200).send('Received hotels request')});

router.get('/events', (req, res) => { apiHelpers.getEvents(req, res) });

module.exports = router;
