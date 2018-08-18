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

app.post('/users/', (req, res) => {
  const { username, password } = req.body;
  User.getIfValid(username, password)
    .then((user) => {
      if (user) {
        req.session.user = user;
        res.sendStatus(201);
      } else {
        res.sendStatus(401);
      }
    });
});

app.get('/users/:userId/tasks/', (req, res) => {
  Task.getTasks(req.params.userId)
    .then(tasks => res.send(JSON.stringify(tasks)));
});

app.post('/users/:userId/tasks/', (req, res) => {
  Task.addTasks(req.body, req.params.userId)
    .then(taskIds => res.status(201).send(JSON.stringify(taskIds)));
});

app.patch('/users/:userId/tasks/:taskId', (req, res) => {
  Task.toggleTask(req.params.taskId)
    .then(() => res.sendStatus(204));
});

app.delete('/users/:userId/tasks/:taskId', (req, res) => {
  Task.deleteTask(req.params.taskId)
    .then(() => res.sendStatus(200));
});


app.listen(PORT, () => {
  console.log(`Listening at ${PORT}...`);
});
