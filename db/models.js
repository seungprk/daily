const { Pool } = require('pg');

const pool = new Pool();
pool.connect();

exports.addTask = (task, userId) => pool.query('INSERT INTO tasks (users_id, text, date) VALUES ($1, $2, CURRENT_DATE) RETURNING id', [
  userId,
  task.text,
])
  .then(res => res.rows[0].id);
