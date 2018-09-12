import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const SubListItem = (props) => {
  const {
    text,
    completed,
    deleteItem,
    toggleItem,
  } = props;
  const textClass = completed ? 'sub-item__text sub-item__text--done' : 'sub-item__text';

  return (
    <div className="sub-item">
      <button className="sub-item__button sub-item__button--check" type="button" onClick={toggleItem}>
        {completed && (
          <svg className="sub-item__icon" viewBox="0 0 40 40">
            <path className="sub-item__path" fill="none" d="M 10,25 L 15,30 M 15,30 L 30,15" />
          </svg>
        )}
      </button>
      <span className={textClass}>
        {text}
      </span>
      <button className="sub-item__button sub-item__button--x" type="button" onClick={deleteItem}>
        <svg className="sub-item__icon" viewBox="0 0 40 40">
          <path className="sub-item__path" d="M 10,10 L 30,30 M 30,10 L 10,30" />
        </svg>
      </button>
    </div>
  );
};

SubListItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  deleteItem: PropTypes.func.isRequired,
  toggleItem: PropTypes.func.isRequired,
};

export default SubListItem;
