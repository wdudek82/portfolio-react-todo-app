// @flow
import React from 'react';

import { Main, LeftIcon, RightIcon, Text, EditInput } from './TodoItem.styles';

type Props = {
  id: number,
  text: string,
  completed: boolean,
  isEdited: boolean,
  saveUpdate: (id: number, text: string) => void,
  cancelUpdate: (void) => void,
  editMode: (void) => void,
  toggle: (void) => void,
  delete: (void) => void,
}

type State = {
  text: string,
}

class TodoItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      text: this.props.text,
    };
    // this.editInput = null;
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
        <LeftIcon
          onClick={this.handleEditMode}
          completed={this.props.completed}
        >
          <i className="fas fa-pencil-alt" />
        </LeftIcon>
        <Text onClick={this.props.toggle} completed={this.props.completed}>
          {this.props.text}
        </Text>
        <RightIcon onClick={this.props.delete}>
          <i className="far fa-times-circle" />
        </RightIcon>
      </Main>
    );

    if (this.props.isEdited) {
      content = (
        <Main>
          <LeftIcon
            onClick={this.props.cancelUpdate}
            edited={this.props.isEdited}
          >
            <i className="fas fa-ban" />
          </LeftIcon>
          <EditInput
            ref={(input) => { this.editInput = input; }}
            type="text"
            value={this.state.text}
            onChange={this.handleEditTodo}
            onKeyDown={this.handleKeyDown}
            onBlur={this.props.cancelUpdate}
          />
          <RightIcon
            onClick={() =>
              this.props.saveUpdate(this.props.id, this.state.text)
            }
            edited={this.props.isEdited}
          >
            <i className="far fa-check-circle" />
          </RightIcon>
        </Main>
      );
    }
    return content;
  }
}

export default TodoItem;
