import { combineReducers } from 'redux';
import tasks from './tasks';
import user from './user';

export default combineReducers({
  tasks,
  user,
});
