import React from 'react';

const todoItem = (props) => {
  return (
    <div
      onClick={() => props.clicked(props.listIndex, props.itemIndex)}
    >
      {props.item.text}{' '}
      {props.item.completed ? '(DONE)' : ''}{' '}
      <span onClick={() => props.delete(props.listIndex, props.itemIndex)}>X</span>
    </div>
  );
};

export default todoItem;
