const pool = require('../connection.js');

exports.getRepeats = taskId => pool.query('SELECT * FROM tasks WHERE tasks_id = $1 ORDER BY id', [taskId])
  .then(res => res.rows);

exports.upsertRepeat = (taskId, completed, repeat, userId) => pool.query(`
    INSERT INTO repeats (tasks_id, completed, repeat) VALUES ($1, $2, $3)
    ON CONFLICT (tasks_id)
    DO UPDATE SET completed = $2, repeat = $3
  `, [
  taskId,
  completed,
  repeat,
])
  .then(res => res.rows.map(row => row.id));

exports.deleteRepeat = repeatId => pool.query('DELETE FROM tasks WHERE id = $1', [repeatId])
  .then(res => res.rowCount > 0);
