const express = require('express');
const User = require('../db/models/User.js');
const tasksRoute = require('./tasks');

const router = express.Router();

router.use('/:userId', (req, res, next) => {
  const userId = parseInt(req.params.userId, 10);

  if (req.session.user.id === userId) {
    next();
  } else {
    res.sendStatus(403);
  }
});

router.use('/:userId/tasks', tasksRoute);

router.post('/', (req, res) => {
  const { username, email, password } = req.body;
  User.create(username, email, password)
    .then(
      (user) => {
        req.session.user = user;
        res.status(201).send(JSON.stringify(user));
      },
      (error) => {
        console.error(error);
        res.sendStatus(400);
      },
    );
});

module.exports = router;
