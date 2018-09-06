const pool = require('../connection.js');

exports.getSubListItems = taskId => pool.query('SELECT * FROM tasks WHERE tasks_id = $1 ORDER BY id', [taskId])
  .then(res => res.rows);

exports.addItem = (taskId, text, userId) => pool.query('INSERT INTO sub_list_items (tasks_id, users_id, text, completed) VALUES ($1, $2, $3, $4) RETURNING id', [
  taskId,
  userId,
  text,
  false,
])
  .then(res => res.rows.map(row => row.id));

exports.deleteSubListItem = itemId => pool.query('DELETE FROM tasks WHERE id = $1', [itemId])
  .then(res => res.rowCount > 0);
