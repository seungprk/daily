import React from 'react';
import PropTypes from 'prop-types';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { addTask } = this.props;
    const { text } = this.state;

    addTask(text);
    this.setState({ text: '' });
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={text} onChange={this.handleChange} />
      </form>
    );
  }
}

Controls.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default Controls;
