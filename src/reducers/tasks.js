const tasks = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_TASKS':
      return action.tasks;
    case 'ADD_TASKS':
      return [
        ...state,
        ...action.tasks,
      ];
    case 'TOGGLE_EDIT':
      return state.map((task) => {
        if (task.id === action.id) return { ...task, isEdit: !task.isEdit };
        return task;
      });
    case 'UPDATE_TASK':
      return state.map((task) => {
        if (task.id === action.task.id) return { ...action.task };
        return task;
      });
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.id);
    case 'UPDATE_SUB_LIST_ITEM':
      return state.map((task) => {
        if (task.id === action.taskId) {
          const subListItems = task.subListItems || [];
          subListItems.push({
            id: action.itemId,
            text: action.text,
            completed: false,
          });
          return {
            ...task,
            subListItems,
          };
        }
        return task;
      });
    default:
      return state;
  }
};

export default tasks;
