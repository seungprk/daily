const express = require('express');
const Task = require('../db/models/Task.js');
const itemsRoute = require('./items.js');

const router = express.Router({ mergeParams: true });

router.use('/:taskId/items', itemsRoute);

router.get('/', (req, res) => {
  Task.getTasks(req.params.userId)
    .then(tasks => res.send(JSON.stringify(tasks)));
});

router.post('/', (req, res) => {
  Task.addTasks(req.body, req.params.userId)
    .then(taskIds => res.status(201).send(JSON.stringify(taskIds)));
});

router.patch('/:taskId', (req, res) => {
  const { userId } = req.params;

  Task.updateTask(req.body, userId)
    .then((allowed) => {
      if (allowed) res.sendStatus(204);
      else res.sendStatus(401);
    });
});

router.delete('/:taskId', (req, res) => {
  const { taskId, userId } = req.params;

  Task.deleteTask(taskId, userId)
    .then((allowed) => {
      if (allowed) res.sendStatus(200);
      else res.sendStatus(401);
    });
});

module.exports = router;
