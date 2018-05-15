import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';

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
  margin: 1rem 0 2rem 0;
  font-weight: 300;
`;

class Todo extends React.Component {
  state = {
    todoList: [
      {text: 'todo item 1', edited: false, completed: false},
      {text: 'todo item 2', edited: false, completed: false},
      {text: 'todo item 3', edited: false, completed: false},
      {text: 'todo item 4', edited: false, completed: false},
      {text: 'todo item 5', edited: false, completed: false}
    ]
  }

  handleToggleItem = (e, itemId) => {
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
    this.setState(() => ({ todoList: [] }));
  }

  handleAddItem = (newItem) => {
    const updatedTodoList = [
      {
        text: newItem,
        completed: false
      },
      ...this.state.todoList
    ];

    this.setState(() => ({ todoList: updatedTodoList }));
  }

  handleEditItem = (itemId) => {
    if (this.state.todoList[itemId].completed) {
      return;
    }

    const updatedTodoList = this.state.todoList.map((todoItem, ind) => {
      if (ind === itemId) {
        todoItem.edited = !todoItem.edited;
      } else {
        todoItem.edited = false;
      }
      return todoItem;
    });
    this.setState(() => ({ todoList: updatedTodoList }));
  }

  render() {
    // const todoList = this.state.todoList.map((todoItem, ind) => (
    const todoList = this.props.todoList.map((todoItem, ind) => (
      <TodoItem
        key={`${todoItem.text}-${ind}`}
        id={todoItem.ind}
        text={todoItem.text}
        completed={todoItem.completed}
        toggle={(e) => this.handleToggleItem(e, ind)}
        edit={() => this.handleEditItem(ind)}
        edited={() => console.log('changed')}
        isEdited={todoItem.edited}
        delete={() => this.handleDeleteItem(ind)}
      />
    ));
    
    return (
      <Container>
        <H1>Sandbox TODO List</H1>
        <TodoForm 
          addItem={this.props.onCreateItem}
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

const mapStateToProps = state => {
  return {
    todoList: state.todoList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCreateItem: text => dispatch(actionCreators.createTodoItem(text)),
    onDeleteItem: itemId => dispatch(actionCreators.deleteTodoItem(itemId)),
    onRemoveAllItems: () => dispatch(actionCreators.removeAllTodoItems()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
