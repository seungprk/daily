const pool = require('../connection.js');

exports.getRepeats = taskId => pool.query('SELECT * FROM tasks WHERE tasks_id = $1 ORDER BY id', [taskId])
  .then(res => res.rows);

exports.addRepeat = (taskId, completed, repeat) => pool.query('INSERT INTO repeats (tasks_id, completed, repeat) VALUES ($1, $2, $3), RETURNING id', [
  taskId,
  completed,
  repeat,
])
  .then(res => res.rows.map(row => row.id));

exports.deleteRepeat = repeatId => pool.query('DELETE FROM tasks WHERE id = $1', [repeatId])
  .then(res => res.rowCount > 0);
