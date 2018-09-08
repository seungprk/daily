const pool = require('../connection.js');

exports.getTasks = userId => Promise.all([
  pool.query('SELECT * FROM tasks WHERE users_id = $1 ORDER BY id', [userId]),
  pool.query('SELECT * FROM sub_list_items WHERE users_id = $1', [userId]),
])
  .then((res) => {
    const [tasks, subListItems] = res;

    const itemsMap = {};
    subListItems.rows.forEach((item) => {
      if (itemsMap[item.tasks_id]) itemsMap[item.tasks_id].push(item);
      else itemsMap[item.tasks_id] = [item];
    });

    return tasks.rows.map(task => ({
      ...task,
      date: Date.parse(task.date),
      subListItems: itemsMap[task.id],
    }));
  });

exports.addTasks = (tasks, userId) => {
  let counter = 1;
  const queryValues = [];
  let queryStr = 'INSERT INTO tasks (users_id, text, completed, date) VALUES';

  tasks.forEach((task) => {
    queryStr += ` ($${counter}, $${counter + 1}, $${counter + 2}, $${counter + 3}),`;
    const taskItems = [userId, task.text, task.completed, task.date];
    queryValues.push(...taskItems);
    counter += taskItems.length;
  });

  queryStr = queryStr.slice(0, -1);
  queryStr += ' RETURNING id';

  return pool.query(queryStr, queryValues)
    .then(res => res.rows.map(row => row.id));
};

exports.updateTask = (task, userId) => pool.query('UPDATE tasks SET text = $1, completed = $2 WHERE id = $3 AND users_id = $4', [
  task.text,
  task.completed,
  task.id,
  userId,
])
  .then(res => res.rowCount > 0);

exports.deleteTask = (taskId, userId) => pool.query('DELETE FROM tasks WHERE id = $1 AND users_id = $2', [taskId, userId])
  .then(res => res.rowCount > 0);
