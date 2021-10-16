const express = require('express');

const router = express.Router();

router.get('/flights', (req, res) => { res.status(200).send('Received flights request')});

router.get('/hotels', (req, res) => { res.status(200).send('Received hotels request')});

router.get('/events', (req, res) => { res.status(200).send('Received events request')});

module.exports = router;
