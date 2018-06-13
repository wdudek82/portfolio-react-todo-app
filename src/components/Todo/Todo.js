// @flow
import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';

import TodoItem from './TodoItem/TodoItem';
import TodoForm from './TodoForm/TodoForm';
import Button from '../UI/Button/Button';
import Filter from '../UI/Filter/Filter';
import { Container, P, H1, HeaderInput } from './Todo.styles';

type Props = {
  todoList: Array<Object>,
  onCreateItem: (string) => void,
  onRemoveAllItems: (void) => void,
};

type State = {
  listTitle: string,
  listTitleEdited: boolean,
  filters: Array<string>,
  activeFilter: string,
};

class Todo extends React.Component<Props, State> {
  state = {
    listTitle: 'Sandbox TODO List',
    listTitleEdited: false,
    filters: ['all', 'completed', 'not completed'],
    activeFilter: 'all',
  };

  handleChangeListTitle = (e: SyntheticEvent<>) => {
    this.setState(() => ({ listTitleEdited: true }));
  };

  handleUpdateHeader = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    const updatedListTitle = e.currentTarget.value;
    this.setState(() => ({ listTitle: updatedListTitle }));
  };

  handleKeyDown = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    const keyPressed = e.keyCode;
    const updateListTitle = e.currentTarget.value;

    if (keyPressed === 13) {
      this.setState(() => ({
        listTitle: updateListTitle,
        listTitleEdited: false,
      }));
    } else if (keyPressed === 27) {
      this.setState(() => ({ listTitleEdited: false }));
    }
  };

  handleSelectFilter = (e: SyntheticKeyboardEvent<HTMLSelectElement>) => {
    const activeFilter = e.currentTarget.value;
    this.setState(() => ({ activeFilter }));
  };

  renderTodoList = () => {
    const todoList = this.props.todoList
      .sort((todoItem) => todoItem.completed)
      .filter((todoItem) => {
        const filter = this.state.activeFilter;
        if (filter === 'completed') {
          return todoItem.completed;
        } else if (filter === 'not completed') {
          return !todoItem.completed;
        }
        return todoItem;
      })
      .map(({ id, text, completed, edited }) => (
        <TodoItem
          key={id}
          id={id}
          text={text}
          completed={completed}
          isEdited={edited}
        />
      ));
    return todoList.length ? todoList : <P>List is empty</P>;
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

    return (
      <Container>
        <H1 onDoubleClick={this.handleChangeListTitle}>{headerContent}</H1>
        <TodoForm addItem={this.props.onCreateItem} />
        <Filter
          options={this.state.filters}
          selected={this.handleSelectFilter}
        />
        {this.renderTodoList()}
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

const mapStateToProps = (state) => {
  return {
    todoList: state.todo.todoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateItem: (text) => dispatch(actionCreators.createTodoItem(text)),
    onRemoveAllItems: () => dispatch(actionCreators.removeAllTodoItems()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todo);
