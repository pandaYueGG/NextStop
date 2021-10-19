var mysql = require('mysql');

var dbConnection;

dbConnection = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'chat'
});

dbConnection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected!');
  }
});

module.exports = dbConnection;