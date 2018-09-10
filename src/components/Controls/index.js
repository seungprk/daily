import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isPlaceholder: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePlaceholder = this.togglePlaceholder.bind(this);
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

  togglePlaceholder() {
    const { isPlaceholder } = this.state;
    this.setState({ isPlaceholder: !isPlaceholder });
  }

  render() {
    const { text, isPlaceholder } = this.state;
    return (
      <div className="controls">
        <form onSubmit={this.handleSubmit}>
          <input
            className="controls__input"
            type="text"
            value={text}
            placeholder={isPlaceholder && 'Add a New Task'}
            onFocus={this.togglePlaceholder}
            onBlur={this.togglePlaceholder}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

Controls.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default Controls;
