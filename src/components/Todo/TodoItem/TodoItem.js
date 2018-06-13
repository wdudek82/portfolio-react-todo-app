// @flow
import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions';

import CheckIcon from '../../UI/Icons/CheckIcon/CheckIcon';
import DeleteIcon from '../../UI/Icons/DeleteIcon/DeleteIcon';
import CancelIcon from '../../UI/Icons/CancelIcon/CancelIcon';
import ApplyIcon from '../../UI/Icons/ApplyIcon/ApplyIcon';

import { Main, Text, EditInput } from './TodoItem.styles';

type Props = {
  id: string,
  text: string,
  completed: boolean,
  isEdited: boolean,
  updateTodoItem: (id: string, text: string) => void,
  cancelEditing: (string) => void,
  startEditing: (string) => void,
  toggleTodoCompleted: (string) => void,
  deleteTodoItem: (string) => void,
};

type State = {
  text: string,
};

class TodoItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      text: this.props.text,
    };
  }

  editInput: ?HTMLInputElement;

  handleEditTodo = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    const newText = e.currentTarget.value;
    this.setState(() => ({ text: newText }));
  };

  handleEditMode = (e: SyntheticMouseEvent<>) => {
    this.props.startEditing(this.props.id);
    this.setState(() => ({ text: this.props.text }));
  };

  handleKeyDown = (e: SyntheticKeyboardEvent<>) => {
    const keyPressed = e.keyCode;

    if (keyPressed === 13) {
      this.props.updateTodoItem(this.props.id, this.state.text);
    } else if (keyPressed === 27) {
      this.props.cancelEditing(this.props.id);
    }
  };

  render() {
    let content = (
      <Main>
        <CheckIcon
          toggle={() => this.props.toggleTodoCompleted(this.props.id)}
          completed={this.props.completed}
        />
        <Text
          onDoubleClick={this.handleEditMode}
          completed={this.props.completed}
        >
          {this.props.text}
        </Text>
        <DeleteIcon delete={() => this.props.deleteTodoItem(this.props.id)} />
      </Main>
    );

    if (this.props.isEdited) {
      content = (
        <Main>
          <ApplyIcon
            save={() =>
              this.props.updateTodoItem(this.props.id, this.state.text)
            }
            isEdited={this.props.isEdited}
          />
          <EditInput
            ref={(input) => {
              this.editInput = input;
            }}
            type="text"
            value={this.state.text}
            onChange={this.handleEditTodo}
            onKeyDown={this.handleKeyDown}
            onBlur={this.props.cancelEditing}
          />
          <CancelIcon
            cancelUpdate={() => this.props.cancelEditing(this.props.id)}
            isEdited={this.props.isEdited}
          />
        </Main>
      );
    }
    return content;
  }
}

export default connect(
  null,
  actionCreators,
)(TodoItem);
