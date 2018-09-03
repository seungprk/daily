import React from 'react';
import SubListItem from '../SubListItem';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    const { typeData } = props;
    this.state = {
      subListItems: [
        { text: 'Sub item todo 1', completed: false },
        { text: 'Sub item todo 2', completed: true },
        { text: 'Sub item todo 3', completed: false },
      ],
    };
  }

  render() {
    const { task, typeData, updateTypeData } = this.props;
    const { subListItems } = this.state;
    return (
      <div>
        {subListItems.map(item => <SubListItem {...item} isEdit={task.isEdit} />)}
        <div>
          <button type="button">
            Add New Item
          </button>
        </div>
      </div>
    );
  }
}

export default ItemList;
