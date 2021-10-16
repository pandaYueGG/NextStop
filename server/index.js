const express = require('express');
const path = require('path');
const router = require('./routes.js');

const PORT = 3001;
const app = express();

app.use(express.json());

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});
