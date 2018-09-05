const pool = require('../connection.js');

exports.getTasks = userId => Promise.all([
  pool.query('SELECT * FROM tasks WHERE users_id = $1 ORDER BY id', [userId]),
  pool.query('SELECT * FROM tasks INNER JOIN repeats ON tasks.id = repeats.tasks_id WHERE tasks.users_id = $1', [userId]),
])
  .then((res) => {
    const [tasks, repeats] = res;

    const repeatsMap = {};
    repeats.rows.forEach((repeat) => {
      repeatsMap[repeat.tasks_id] = repeat;
    });

    return tasks.rows.map((task) => {
      const data = repeatsMap[task.id];
      return {
        ...task,
        date: Date.parse(task.date),
        type: {
          name: task.type,
          data,
        },
      };
    });
  });

exports.addTasks = (tasks, userId) => {
  let counter = 1;
  const queryValues = [];
  let queryStr = 'INSERT INTO tasks (users_id, text, date, type) VALUES';

  tasks.forEach((task) => {
    queryStr += ` ($${counter}, $${counter + 1}, $${counter + 2}, $${counter + 3}),`;
    const taskItems = [userId, task.text, task.date, task.type.name];
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
  task.type.name,
  task.id,
  userId,
])
  .then(res => res.rowCount > 0);

exports.deleteTask = (taskId, userId) => pool.query('DELETE FROM tasks WHERE id = $1 AND users_id = $2', [taskId, userId])
  .then(res => res.rowCount > 0);
