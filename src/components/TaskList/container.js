import { connect } from 'react-redux';
import TaskList from '.';

const mapStateToProps = (state, ownProps) => {
  const tasks = state.tasks.filter((task) => {
    const target = ownProps.targetDate;
    const date = new Date(task.date);
    return (
      target.getFullYear() === date.getFullYear()
      && target.getMonth() === date.getMonth()
      && target.getDate() === date.getDate()
    );
  });

  return {
    tasks,
  };
};

export default connect(
  mapStateToProps,
)(TaskList);
