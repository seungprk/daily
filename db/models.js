const { Pool } = require('pg');

const pool = new Pool();
pool.connect();

exports.addTask = (task, userId) => pool.query('INSERT INTO tasks (users_id, text, date) VALUES ($1, $2, $3) RETURNING id', [
  userId,
  task.text,
  task.date,
])
  .then(res => res.rows[0].id);

exports.toggleTask = taskId => pool.query('UPDATE tasks SET completed = NOT completed WHERE id = $1', [taskId]);

exports.deleteTask = taskId => pool.query('DELETE FROM tasks WHERE id = $1', [taskId]);
