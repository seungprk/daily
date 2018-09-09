const pool = require('../connection.js');

exports.getByUser = userId => pool.query('SELECT * FROM sub_list_items WHERE users_id = $1 ORDER BY id', [userId])
  .then(res => res.rows);

exports.addItem = (taskId, text, userId) => pool.query('INSERT INTO sub_list_items (tasks_id, users_id, text, completed) VALUES ($1, $2, $3, $4) RETURNING id', [
  taskId,
  userId,
  text,
  false,
])
  .then(res => res.rows.map(row => row.id));

exports.delete = (userId, taskId, itemId) => pool.query('DELETE FROM sub_list_items WHERE users_id = $1 AND tasks_id = $2 AND id = $3', [
  userId,
  taskId,
  itemId,
])
  .then(res => res.rowCount > 0);

exports.deleteByTask = (userId, taskId) => pool.query('DELETE FROM sub_list_items WHERE users_id = $1 AND tasks_id = $2', [
  userId,
  taskId,
]);

exports.toggle = (userId, taskId, itemId) => pool.query('UPDATE sub_list_items SET completed = NOT completed WHERE users_id = $1 AND tasks_id = $2 AND id = $3', [
  userId,
  taskId,
  itemId,
])
  .then(res => res.rowCount > 0);
