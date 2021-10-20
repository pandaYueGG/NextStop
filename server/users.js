const db = require('../db/index.js');

const bcrypt = require('bcrypt');
const saltRounds = 10

module.exports = {
  addUser: (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    bcrypt.hash(password,saltRounds, (err, hash) => {

      if (err) {
        console.log(err)
      }

      db.query(
        "INSERT INTO users (username, password) VALUES (?, ?)", 
        [username, hash],
        (err, result) => {
            if (err) {
                res.status(404).send(err);
            } else {
                res.status(200).send(result);
            }
      });
    });
  },
  getUser: (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
      "SELECT * FROM users WHERE username = ?;",
      username,
      (err, result) => {
        if (err) {
          res.send({err: err});
        }

        if (result.length > 0) {
          bcrypt.compare(password, result[0].password, (error, response) => {
            if (response) {
              res.send(result)
            } else {
              res.send({ message: "Wrong username/password combination!" });
            }
          })
        } else {
          res.send({ message: "User doesn't exist" });
        }
      }
    )
  }
}