import React from 'react';

import ButtonC from '../UI/Button/Button';
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
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  height: 50px;
  margin: 0.5rem 0;
  border: 1px solid #bbb;
  user-select: none;

  :hover {
    box-shadow: 3px 3px 15px 2px #bbb;
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.completed ? '#bbb' : '#000'};
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  width: 100%;
  height: 100%;
  padding: 0 1rem;
`;

const Delete = styled.span`
  margin: 0 0.1rem;
  font-size: 0.8rem;
  height: 0;

  :hover {
    cursor: pointer;
    font-weight: bold;
  }
`;

const Button = styled.button`
  margin-top: 1rem;
  background: none;
  border: 1px solid #bbb;
  border-radius: 5%;
  padding: 0.7rem;
  outline: none;

  :hover {
    background: #ddd;
  }

  :disabled {
    background: #ddd;
    cursor: not-allowed;
  }
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

  render() {
    const todoList = this.state.todoList.map((todoItem, ind) => (
      <Item key={`${todoItem.text}-${ind}`}>
        <Text
          onClick={(e) => this.handleToggleItem(e, ind)}
          completed={todoItem.completed}
        >
          {todoItem.text}
        </Text>
        <Delete onClick={() => this.handleDeleteItem(ind)}>x</Delete>
      </Item>
    ));
    
    return (
      <Container>
        <H1>Sandbox TODO List</H1>
        {todoList.length > 0 ? todoList : 'No items on the list'}
        {/* <Button
          disabled={this.state.todoList.length === 0}
          onClick={this.handleRemoveAll}
        >Remoe All</Button> */}
        <ButtonC
          text="Remove All"
          disabled={this.state.todoList.length === 0}
          clicked={this.handleRemoveAll}
        />
      </Container>
    )
  }
}

export default Sandbox;
