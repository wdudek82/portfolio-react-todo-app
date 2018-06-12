// @flow
import React from 'react';

import CheckIcon from '../../UI/Icons/CheckIcon/CheckIcon';
import DeleteIcon from '../../UI/Icons/DeleteIcon/DeleteIcon';
import CancelIcon from '../../UI/Icons/CancelIcon/CancelIcon';
import ApplyIcon from '../../UI/Icons/ApplyIcon/ApplyIcon';

import { Main, Text, EditInput } from './TodoItem.styles';

type Props = {
  completed: boolean,
  id: number,
  isEdited: boolean,
  text: string,
  saveUpdate: (id: number, text: string) => void,
  cancelUpdate: (void) => void,
  editMode: (void) => void,
  toggle: (void) => void,
  delete: (void) => void,
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
    this.props.editMode();
    this.setState(() => ({ text: this.props.text }));
  };

  handleKeyDown = (e: SyntheticKeyboardEvent<>) => {
    const keyPressed = e.keyCode;

    if (keyPressed === 13) {
      this.props.saveUpdate(this.props.id, this.state.text);
    } else if (keyPressed === 27) {
      this.props.cancelUpdate();
    }
  };

  render() {
    let content = (
      <Main>
        <CheckIcon
          toggle={this.props.toggle}
          completed={this.props.completed}
        />
        <Text
          onDoubleClick={this.handleEditMode}
          completed={this.props.completed}
        >
          {this.props.text}
        </Text>
        <DeleteIcon delete={this.props.delete} />
      </Main>
    );

    if (this.props.isEdited) {
      content = (
        <Main>
          <ApplyIcon
            save={() => this.props.saveUpdate(this.props.id, this.state.text)}
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
            onBlur={this.props.cancelUpdate}
          />
          <CancelIcon
            cancelUpdate={this.props.cancelUpdate}
            isEdited={this.props.isEdited}
          />
        </Main>
      );
    }
    return content;
  }
}

export default TodoItem;
