var mysql = require('mysql');

var dbConnection;

dbConnection = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'NSDB'
});

dbConnection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected!');
  }
});

module.exports = dbConnection;