import React from 'react';
import PropTypes from 'prop-types';

class ItemRepeat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 0,
      repeat: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    const { task } = this.props;
    if (task.isEdit) {
      return (
        <span>
          <input id="completed" type="number" onChange={this.handleChange} />
          <input id="repeat" type="number" onChange={this.handleChange} />
        </span>
      );
    }
    return (
      <span>
        3 / 5
      </span>
    );
  }
}

ItemRepeat.propTypes = {
  task: PropTypes.shape({
    isEdit: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ItemRepeat;
