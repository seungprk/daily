const pool = require('../connection.js');

exports.getTasks = userId => pool.query('SELECT * FROM tasks WHERE users_id = $1 ORDER BY id', [userId])
  .then(res => res.rows.map(task => ({ ...task, date: Date.parse(task.date) })));

exports.addTasks = (tasks, userId) => {
  let counter = 1;
  const queryValues = [];
  let queryStr = 'INSERT INTO tasks (users_id, text, date, type) VALUES';

  tasks.forEach((task) => {
    queryStr += ` ($${counter}, $${counter + 1}, $${counter + 2}, $${counter + 3}),`;
    const taskItems = [userId, task.text, task.date, task.type];
    queryValues.push(...taskItems);
    counter += 4;
  });

  queryStr = queryStr.slice(0, -1);
  queryStr += ' RETURNING id';

  return pool.query(queryStr, queryValues)
    .then(res => res.rows.map(row => row.id));
};

exports.updateTask = (task, userId) => pool.query('UPDATE tasks SET text = $1, completed = $2, type = $3 WHERE id = $4 AND users_id = $5', [
  task.text,
  task.completed,
  task.type,
  task.id,
  userId,
])
  .then(res => res.rowCount > 0);

exports.deleteTask = (taskId, userId) => pool.query('DELETE FROM tasks WHERE id = $1 AND users_id = $2', [taskId, userId])
  .then(res => res.rowCount > 0);
