const express = require('express');
// const path = require('path');
const router = require('./routes.js');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
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
