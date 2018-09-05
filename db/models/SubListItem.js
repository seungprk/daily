const pool = require('../connection.js');

exports.getSubListItems = taskId => pool.query('SELECT * FROM tasks WHERE tasks_id = $1 ORDER BY id', [taskId])
  .then(res => res.rows);

exports.addSubListItem = (taskId, text, completed) => pool.query('INSERT INTO repeats (tasks_id, completed, repeat) VALUES ($1, $2, $3), RETURNING id', [
  taskId,
  text,
  completed,
])
  .then(res => res.rows.map(row => row.id));

exports.deleteSubListItem = itemId => pool.query('DELETE FROM tasks WHERE id = $1', [itemId])
  .then(res => res.rowCount > 0);
