const express = require('express');
const apiHelpers = require('./helpers.js');
const flights = require('./flights.js');
const users = require('./users.js');
const jwt = require('jsonwebtoken');

const router = express.Router();



router.get('/flights', flights.getRoutes);

router.get('/hotels', (req, res) => { apiHelpers.getHotels(req, res) });

router.get('/events', (req, res) => { apiHelpers.getEvents(req, res) });

router.post('/register', (req, res) => { users.addUser(req, res) });

router.post('/login', (req, res) => { users.getUser(req, res) });

router.get('/login', (req, res) => { users.getLogin(req, res) });

const verifyJWT = (req, res, next) => {
    
    const token = req.headers["x-access-token"]
    
    if (!token) {
        res.send("User must have a token, please verify using token")
    } else {
        jwt.verify(token, "jwtSecret", (err, decoded) => {
            if (err) {
                res.json({ auth: false, message: "You failed to authenticate"});
            } else {
                req.userId = decoded.id;
                next();
            }
        });
    }
}

router.get('/isUserAuth', verifyJWT, (req, res) => { users.isUserAuth(req, res) });

module.exports = router;
