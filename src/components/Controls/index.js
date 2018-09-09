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

    addTask(text, 1);
    this.setState({ text: '' });
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    const { text } = this.state;
    const { copyYesterday } = this.props;
    return (
      <div>
        <button type="button" onClick={copyYesterday}>
          Copy from Yesterday
        </button>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={text} onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

Controls.propTypes = {
  addTask: PropTypes.func.isRequired,
  copyYesterday: PropTypes.func.isRequired,
};

export default Controls;
