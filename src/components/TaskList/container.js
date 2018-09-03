import { connect } from 'react-redux';
import TaskList from '.';

const mapStateToProps = (state, ownProps) => {
  const tasks = state.tasks.filter((task) => {
    const taskDateStr = new Date(task.date).toDateString();
    return taskDateStr === ownProps.targetDate.toDateString();
  });

  return { tasks };
};

export default connect(
  mapStateToProps,
)(TaskList);
