import React from 'react';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    const { text } = this.state;
    return <input type="text" value={text} onChange={this.handleChange} />;
  }
}

export default Controls;
