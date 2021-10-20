const express = require('express');
// const path = require('path');
const router = require('./routes.js');
const cors = require("cors");

const PORT = 3001;
const app = express();

const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "backreactor",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expres: 60 * 60 * 24,
    },
  })
)

app.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});
