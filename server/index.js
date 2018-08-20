const path = require('path');
const express = require('express');
const cookieSession = require('cookie-session');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Task = require('../db/models/Task.js');
const User = require('../db/models/User.js');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../build')));
app.use(cookieSession({
  name: 'session',
  keys: ['testkeybecausefordevtesting324lkj234kl24j3kl'],
  maxAge: 24 * 60 * 60 * 1000,
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('/login', (req, res) => {
  const { user } = req.session;
  res.status(200).send({ user });
});

app.post('/login', (req, res) => {
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

app.delete('/login', (req, res) => {
  req.session = null;
  res.sendStatus(200);
});

app.post('/users', (req, res) => {
  const { username, email, password } = req.body;
  User.create(username, email, password)
    .catch((error) => {
      console.error(error);
      res.sendStatus(400);
    })
    .then(user => res.status(201).send(JSON.stringify(user)));
});

app.use('/users/:userId', (req, res, next) => {
  const userId = parseInt(req.params.userId, 10);

  if (req.session.user.id === userId) {
    next();
  } else {
    res.sendStatus(403);
  }
});

app.get('/users/:userId/tasks', (req, res) => {
  Task.getTasks(req.params.userId)
    .then(tasks => res.send(JSON.stringify(tasks)));
});

app.post('/users/:userId/tasks', (req, res) => {
  Task.addTasks(req.body, req.params.userId)
    .then(taskIds => res.status(201).send(JSON.stringify(taskIds)));
});

app.patch('/users/:userId/tasks/:taskId', (req, res) => {
  const { taskId, userId } = req.params;

  Task.toggleTask(taskId, userId)
    .then((allowed) => {
      if (allowed) res.sendStatus(204);
      else res.sendStatus(401);
    });
});

app.delete('/users/:userId/tasks/:taskId', (req, res) => {
  const { taskId, userId } = req.params;

  Task.deleteTask(taskId, userId)
    .then((allowed) => {
      if (allowed) res.sendStatus(200);
      else res.sendStatus(401);
    });
});

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}...`);
});
