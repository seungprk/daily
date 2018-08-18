const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Task = require('../db/models.js');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
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
