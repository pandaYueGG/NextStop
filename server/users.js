const db = require('../db/index.js');

module.exports = {
  addUser: (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
      "INSERT INTO users (username, password) VALUES (?, ?)", 
      [username, password],
      (err, result) => {
          if (err) {
              res.status(404).send(err);
          } else {
              res.status(200).send(result);
          }
      });
  }
};

