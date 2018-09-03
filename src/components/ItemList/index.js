import React from 'react';
import SubListItem from '../SubListItem';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const { task, addItem } = this.props;
    const { value } = this.state;
    const { data } = task.type;
    return (
      <div>
        {data ? data.map(item => <SubListItem {...item} isEdit={task.isEdit} />) : null}
        <div>
          <input type="text" value={value} onChange={this.handleChange} />
          <button type="button" onClick={() => addItem(value)}>
            Add New Item
          </button>
        </div>
      </div>
    );
  }
}

export default ItemList;
