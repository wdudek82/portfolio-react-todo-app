import React from 'react';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actionCreators from '../../store/actions';

import TodoItem from './TodoItem/TodoItem';
import TodoForm from './TodoForm/TodoForm';
import Button from '../UI/Button/Button';
import { Container, P, H1, HeaderInput } from './Todo.styles';

class Todo extends React.Component {
  state = {
    listTitle: 'Sandbox TODO List',
    listTitleEdited: false,
  };

  handleChangeListTitle = (e) => {
    this.setState(() => ({ listTitleEdited: true }));
  };

  handleUpdateHeader = (e) => {
    const updatedListTitle = e.target.value;
    this.setState(() => ({ listTitle: updatedListTitle }));
  };

  handleKeyDown = (e) => {
    const keyPressed = e.keyCode;
    const updateListTitle = e.target.value;

    if (keyPressed === 13) {
      this.setState(() => ({
        listTitle: updateListTitle,
        listTitleEdited: false,
      }));
    } else if (keyPressed === 27) {
      this.setState(() => ({ listTitleEdited: false }));
    }
  };

  render() {
    let headerContent = (
      <React.Fragment>
        <i
          tabIndex="0"
          role="button"
          onClick={this.handleChangeListTitle}
          onKeyPress={this.handleChangeListTitle}
          className="far fa-edit"
        />
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
            onBlur={() => this.setState(() => ({ listTitleEdited: false }))}
          />
        </React.Fragment>
      );
    }

    // FIXME: todoList inside todoList object - thats stupid
    // convert todo state to array of todos
    const todoList = this.props.todoList.map((todoItem, ind) => {
      return (
        <TodoItem
          key={`${_.uniqueId(todoItem.text)}`}
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

      );
    });
    return (
      <Container>
        <H1>{headerContent}</H1>
        <TodoForm addItem={this.props.onCreateItem} />
        {todoList.length > 0 ? todoList : <P>List is empty</P>}
        <Button
          text="Remove All"
          disabled={this.props.todoList.length === 0}
          clicked={this.props.onRemoveAllItems}
          mt="1rem"
        />
      </Container>
    );
  }
}

Todo.propTypes = {
  todoList: PropsTypes.array.isRequired,
  onCreateItem: PropsTypes.func.isRequired,
  onToggleCompleted: PropsTypes.func.isRequired,
  onTodoStopEditing: PropsTypes.func.isRequired,
  onRemoveAllItems: PropsTypes.func.isRequired,
  onTodoStartEditing: PropsTypes.func.isRequired,
  onUpdateItem: PropsTypes.func.isRequired,
  onDeleteItem: PropsTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    todoList: state.todo.todoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateItem: (text) => dispatch(actionCreators.createTodoItem(text)),
    onUpdateItem: (itemId, newText) =>
      dispatch(actionCreators.updateTodoItem(itemId, newText)),
    onDeleteItem: (itemId) => dispatch(actionCreators.deleteTodoItem(itemId)),
    onRemoveAllItems: () => dispatch(actionCreators.removeAllTodoItems()),
    onToggleCompleted: (itemId) =>
      dispatch(actionCreators.toggleTodoCompleted(itemId)),
    onTodoStartEditing: (itemId) =>
      dispatch(actionCreators.setTodoStartEditing(itemId)),
    onTodoStopEditing: (itemId) =>
      dispatch(actionCreators.setTodoStopEditing(itemId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
