const { Pool } = require('pg');

const pool = new Pool();
pool.connect();

exports.getTasks = userId => pool.query('SELECT * FROM tasks WHERE users_id = $1 ORDER BY id', [userId])
  .then(res => res.rows.map(task => ({
    id: task.id,
    text: task.text,
    completed: task.completed,
    date: Date.parse(task.date),
  })));

exports.addTasks = (tasks, userId) => {
  let counter = 1;
  const queryValues = [];
  let queryStr = 'INSERT INTO tasks (users_id, text, date) VALUES';

  tasks.forEach((task) => {
    queryStr += ` ($${counter}, $${counter + 1}, $${counter + 2}),`;
    const taskItems = [userId, task.text, task.date];
    queryValues.push(...taskItems);
    counter += 3;
  });

  queryStr = queryStr.slice(0, -1);
  queryStr += ' RETURNING id';

  return pool.query(queryStr, queryValues)
    .then(res => res.rows.map(row => row.id));
};

exports.toggleTask = taskId => pool.query('UPDATE tasks SET completed = NOT completed WHERE id = $1', [taskId]);

exports.deleteTask = taskId => pool.query('DELETE FROM tasks WHERE id = $1', [taskId]);