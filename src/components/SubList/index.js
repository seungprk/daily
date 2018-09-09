import React from 'react';
import SubListItemContainer from '../SubListItem/container';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isAdd: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.startAdd = this.startAdd.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  startAdd() {
    this.setState({ isAdd: true });
  }

  handleAdd(e) {
    e.preventDefault();
    const { addItem } = this.props;
    const { value } = this.state;

    addItem(value);
    this.setState({ value: '' });
  }

  render() {
    const { task } = this.props;
    const { value, isAdd } = this.state;
    const { subListItems } = task;
    return (
      <div>
        {subListItems.map(item => <SubListItemContainer {...item} task={task} />)}
        <div>
          {isAdd ? (
            <form onSubmit={this.handleAdd}>
              <input type="text" value={value} onChange={this.handleChange} />
            </form>
          ) : (
            <button type="button" onClick={this.startAdd}>
              Add New Item
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default ItemList;
