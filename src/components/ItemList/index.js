import React from 'react';
import SubListItemContainer from '../SubListItem/container';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleAdd() {
    const { addItem } = this.props;
    const { value } = this.state;
    addItem(value);
    this.setState({ value: '' });
  }

  render() {
    const { task } = this.props;
    const { value } = this.state;
    const { subListItems } = task;
    return (
      <div>
        {subListItems ? subListItems.map(item => <SubListItemContainer {...item} task={task} />) : null}
        <div>
          <input type="text" value={value} onChange={this.handleChange} />
          <button type="button" onClick={this.handleAdd}>
            Add New Item
          </button>
        </div>
      </div>
    );
  }
}

export default ItemList;
