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
  render() {
    const todoList = this.props.todoList.map((todoItem, ind) => (
      <TodoItem
        key={`${todoItem.text}-${ind}`}
        id={todoItem.ind}
        text={todoItem.text}
        completed={todoItem.completed}
        toggle={() => this.props.onToggleCompleted(ind)}
        edit={() => this.props.onTodoStartEditing(ind)}
        isEdited={todoItem.edited}
        edited={() => console.log('changed')}
        delete={() => this.props.onDeleteItem(ind)}
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
          disabled={this.props.todoList.length === 0}
          clicked={this.props.onRemoveAllItems}
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
    onToggleCompleted: itemId => dispatch(actionCreators.toggleTodoCompleted(itemId)),
    onTodoStartEditing: itemId => dispatch(actionCreators.setTodoStartEditing(itemId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
