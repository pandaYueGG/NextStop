const config = require('../config.js');

var mysql = require('mysql');

var dbConnection;

dbConnection = mysql.createConnection(config);

dbConnection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected!');
  }
});

module.exports = dbConnection;