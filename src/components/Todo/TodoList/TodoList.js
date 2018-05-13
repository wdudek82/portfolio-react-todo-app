import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { Container, Header, ListBody } from './style';

const todoList = (props) => {
  const todoItems = props.todoItems.map((item, ind) => (
    <TodoItem
      key={`${item.text}-${ind}`}
      item={item}
      listIndex={props.listIndex}
      itemIndex={ind}
      clicked={props.toggleItem}
      delete={props.deleteItem}
    />
  ));

  return (
    <Container>
      <Header>
        {props.title} (archived: {props.archived ? 'yes' : 'no'})
      </Header>
      <ListBody>
        {todoItems}
      </ListBody>
    </Container>
  );
};

export default todoList;
