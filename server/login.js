const express = require('express');
const User = require('../db/models/User.js');

const router = express.Router();

router.get('/', (req, res) => {
  const { user } = req.session;
  res.status(200).send({ user });
});

router.post('/', (req, res) => {
  const { username, password } = req.body;
  User.getIfValid(username, password)
    .then((user) => {
      if (user) {
        req.session.user = user;
        res.status(200).send(JSON.stringify(user));
      } else {
        res.sendStatus(401);
      }
    });
});

router.delete('/', (req, res) => {
  req.session = null;
  res.sendStatus(200);
});

module.exports = router;
