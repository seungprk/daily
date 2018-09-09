import React from 'react';
import PropTypes from 'prop-types';
import SubListItemContainer from '../SubListItem/container';

class SubList extends React.Component {
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
    this.setState({
      value: '',
      isAdd: false,
    });
  }

  render() {
    const { task } = this.props;
    const { value, isAdd } = this.state;
    const { subListItems } = task;
    return (
      <div>
        {subListItems.map(item => <SubListItemContainer {...item} key={item.id} task={task} />)}
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

SubList.propTypes = {
  task: PropTypes.shape({}).isRequired,
  addItem: PropTypes.func.isRequired,
};

export default SubList;
