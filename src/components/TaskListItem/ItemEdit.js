import React from 'react';
import PropTypes from 'prop-types';
import './TaskListItem.css';

class ItemEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selection: props.task.type };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
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
        <span className={textClass}>
          {`TYPE: ${task.type}`}
        </span>
        <select value={selection} onChange={this.handleChange}>
          <option>
            Check
          </option>
          <option>
            Counter
          </option>
          <option>
            List
          </option>
        </select>
        <button type="button" onClick={() => toggleEdit(task.id)}>
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
    type: PropTypes.string.isRequired,
  }).isRequired,
  toggleEdit: PropTypes.func.isRequired,
};

export default ItemEdit;
