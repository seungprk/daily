import React from 'react';
import PropTypes from 'prop-types';
import './TaskListItem.css';

class ItemEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selection: props.task.type.name };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { task, changeType } = this.props;
    changeType({
      name: e.target.value,
    }, task);
    this.setState({ selection: e.target.value });
  }

  render() {
    const { task, toggleEdit } = this.props;
    const { selection } = this.state;

    const textClass = task.completed ? 'task-list-item--done' : '';
    return (
      <div>
        <span className={textClass}>
          {`EDITING: ${task.text}`}
        </span>
        <select value={selection} onChange={this.handleChange}>
          <option value="check">
            Check
          </option>
          <option value="repeat">
            Repeat
          </option>
          <option value="list">
            List
          </option>
        </select>
        <button type="button" onClick={toggleEdit}>
          Done
        </button>
      </div>
    );
  }
}

ItemEdit.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    type: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  toggleEdit: PropTypes.func.isRequired,
  changeType: PropTypes.func.isRequired,
};

export default ItemEdit;
