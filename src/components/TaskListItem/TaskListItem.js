import React from 'react';
import PropTypes from 'prop-types';
import ItemEdit from './ItemEdit';
import ItemDisplay from './ItemDisplay';
import ItemRepeat from './ItemRepeat';
import ItemList from './ItemList';
import './TaskListItem.css';

class TaskListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeData: null,
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateTypeData = this.updateTypeData.bind(this);
  }

  updateTypeData(e) {
    const { typeData } = this.state;
    this.setState({
      typeData: {
        ...typeData,
        [e.target.id]: e.target.value,
      },
    });
  }

  toggleEdit() {
    const { task, toggleEdit } = this.props;
    const { typeData } = this.state;
    toggleEdit(task, typeData);
  }

  render() {
    const { task } = this.props;
    const { typeData } = this.state;
    return (
      <div>
        {task.isEdit ? (
          <ItemEdit {...this.props} toggleEdit={this.toggleEdit} />
        ) : (
          <ItemDisplay {...this.props} />
        )}
        {task.type.name === 'repeat' ? <ItemRepeat task={task} typeData={typeData} updateTypeData={this.updateTypeData} /> : null}
        {task.type.name === 'list' ? <ItemList task={task} typeData={typeData} updateTypeData={this.updateTypeData} /> : null}
      </div>
    );
  }
}

TaskListItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    type: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  toggleTask: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskListItem;
