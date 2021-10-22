// build out an index.js file with the password set properly

var mysql = require('mysql');

var dbConnection;

dbConnection = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '', /* <= SET PASSWORD HERE*/
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