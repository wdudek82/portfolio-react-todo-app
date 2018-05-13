import React from 'react';

import TodoItem from './TodoItem/TodoItem';
import TodoForm from './TodoForm/TodoForm';
import Button from '../UI/Button/Button';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  padding: 2rem;
  width: 500px;
  box-shadow: 3px 3px 15px #bbb;
`;

const H1 = styled.h1`
  margin: 0 0 1rem 0;
  font-weight: 300;
`;

class Sandbox extends React.Component {
  state = {
    todoList: [
      {text: 'todo item 1', completed: false},
      {text: 'todo item 2', completed: false},
      {text: 'todo item 3', completed: false},
      {text: 'todo item 4', completed: false},
      {text: 'todo item 5', completed: true}
    ]
  }

  handleToggleItem = (e, itemId) => {
    console.log('toggle item', itemId);
    console.log(this.state);

    const updatedTodoList = this.state.todoList.map((todoItem, index) => {
      if (index === itemId) {
        return {
          ...todoItem,
          completed: !todoItem.completed
        };
      }
      return todoItem;
    });

    this.setState(() => ({
      todoList: updatedTodoList
    }));
  }

  handleDeleteItem = (itemId) => {
    const updatedTodoList = this.state.todoList.filter((item, ind) => (
      itemId !== ind
    ))
    this.setState(() => ({todoList: updatedTodoList}));
  }

  handleRemoveAll = () => {
    console.log('remove all');
    this.setState(() => ({ todoList: [] }));
  }

  handleAddItem = (newItem) => {
    const updatedTodoList = [
      ...this.state.todoList,
      {
        text: newItem,
        completed: false
      }
    ];

    this.setState(() => ({ todoList: updatedTodoList }));

  }

  render() {
    const todoList = this.state.todoList.map((todoItem, ind) => (
      <TodoItem
        key={`${todoItem.text}-${ind}`}
        text={todoItem.text}
        completed={todoItem.completed}
        toggle={(e) => this.handleToggleItem(e, ind)}
        delete={() => this.handleDeleteItem(ind)}
      />
    ));
    
    return (
      <Container>
        <H1>Sandbox TODO List</H1>
        <TodoForm 
          addItem={this.handleAddItem}
        />
        {todoList.length > 0 ? todoList : 'No items on the list'}
        <Button
          text="Remove All"
          disabled={this.state.todoList.length === 0}
          clicked={this.handleRemoveAll}
          mt="1rem"
        />
      </Container>
    )
  }
}

export default Sandbox;
