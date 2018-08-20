const bcrypt = require('bcrypt');
const pool = require('../connection.js');

exports.getIfValid = (username, password) => pool.query('SELECT * FROM users WHERE username = $1', [username])
  .then((res) => {
    const userData = res.rows[0];
    if (userData) {
      return bcrypt.compare(password, userData.password)
        .then((passIsValid) => {
          if (passIsValid) return userData;
          return null;
        });
    }
    return null;
  });

exports.create = (username, email, password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds)
    .then(hash => pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id', [
      username,
      email,
      hash,
    ]))
    .then(res => res.rows[0].id);
};
