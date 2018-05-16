import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';

import TodoItem from './TodoItem/TodoItem';
import TodoForm from './TodoForm/TodoForm';
import Button from '../UI/Button/Button';
import { InputFieldCSS } from '../UI/Input/Input'; 
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0rem 0 1rem 0;
  font-weight: 300;
  border: 1px dotted transparent;
  min-height:  66px;
  padding: 0 1rem;
  width: 350px;
  word-break: break-all;

  i {
    display: none;
    position: absolute;
    font-size: 0.7rem;
    right: 4px;
    top: 4px;
  }

  :hover {
    border: 1px dotted black;

    i {
      display: inline-block;
      color: #bbb;
      
      :hover {
        color: #000;
        cursor: pointer;
      }
    }
  }
`;

const HeaderInput = styled.input`
  ${InputFieldCSS}
  display: inline-block;
  font-size: 2rem;
  font-weight: 300;
  /* padding: 0 1rem; */
  margin: 0 1rem;
  width: 300px;
`;

class Todo extends React.Component {
  state = {
    listTitle: 'Sandbox TODO List',
    listTitleEdited: false
  }

  handleChangeListTitle = (e) => {
    console.log('header', e);
    this.setState(() => ({ listTitleEdited: true }));
  }

  handleUpdateHeader = (e) => {
    console.log(e.target.value);
    const updatedListTitle = e.target.value;
    this.setState(() => ({ listTitle: updatedListTitle }));
  }

  handleKeyDown = (e) => {
    const keyPressed = e.keyCode;
    const updateListTitle = e.target.value;

    console.log('key prssed:', keyPressed);

    if (keyPressed === 13) {
      this.setState(() => (
        {
          listTitle: updateListTitle,
          listTitleEdited: false
        }
      ));
    } else if (keyPressed === 27) {
      this.setState(() => ({ listTitleEdited: false }));
    }
  }

  render() {
    let headerContent = (
      <React.Fragment>
        <i onClick={this.handleChangeListTitle} className="far fa-edit"></i>
        {this.state.listTitle || 'no title'}
      </React.Fragment>
    );
    if (this.state.listTitleEdited) {
      headerContent = (
        <React.Fragment>
          <HeaderInput
            value={this.state.listTitle}
            onChange={this.handleUpdateHeader}
            onKeyDown={this.handleKeyDown}
          />
        </React.Fragment>
      );
    }

    const todoList = this.props.todoList.map((todoItem, ind) => (
      <TodoItem
        key={`${todoItem.text}-${ind}`}
        id={ind}
        text={todoItem.text}
        completed={todoItem.completed}
        toggle={() => this.props.onToggleCompleted(ind)}
        editMode={() => this.props.onTodoStartEditing(ind, todoItem.text)}
        isEdited={todoItem.edited}
        cancelUpdate={() => this.props.onTodoStopEditing(ind)}
        saveUpdate={this.props.onUpdateItem}
        delete={() => this.props.onDeleteItem(ind)}
      />
    ));
    
    return (
      <Container>
        <H1>
          {headerContent}
        </H1>
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
    onCreateItem: text => (
      dispatch(actionCreators.createTodoItem(text))
    ),
    onUpdateItem: (itemId, newText) => (
      dispatch(actionCreators.updateTodoItem(itemId, newText))
    ),
    onDeleteItem: itemId => (
      dispatch(actionCreators.deleteTodoItem(itemId))
    ),
    onRemoveAllItems: () => (
      dispatch(actionCreators.removeAllTodoItems())
    ),
    onToggleCompleted: itemId => (
      dispatch(actionCreators.toggleTodoCompleted(itemId))
    ),
    onTodoStartEditing: itemId => (
      dispatch(actionCreators.setTodoStartEditing(itemId))
    ),
    onTodoStopEditing: itemId => (
      dispatch(actionCreators.setTodoStopEditing(itemId))
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
