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

app.post('/users/:userId/tasks/', (req, res) => {
  Task.addTask(req.body, req.params.userId)
    .then(taskId => res.status(201).send(taskId.toString()));
});

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}...`);
});
