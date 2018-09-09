const express = require('express');
const SubListItem = require('../db/models/SubListItem.js');

const router = express.Router({ mergeParams: true });

router.post('/', (req, res) => {
  const { userId, taskId } = req.params;
  const { text } = req.body;

  SubListItem.addItem(taskId, text, userId)
    .then(itemId => res.status(201).send(JSON.stringify(itemId)));
});

router.delete('/:itemId', (req, res) => {
  const { userId, taskId, itemId } = req.params;
  SubListItem.delete(userId, taskId, itemId)
    .then((allowed) => {
      if (allowed) res.sendStatus(200);
      else res.sendStatus(401);
    });
});

router.patch('/:itemId', (req, res) => {
  const { userId, taskId, itemId } = req.params;
  SubListItem.toggle(userId, taskId, itemId)
    .then((allowed) => {
      if (allowed) res.sendStatus(204);
      else res.sendStatus(401);
    });
});

module.exports = router;
