// @flow
import React from 'react';
// import PropTypes from 'prop-types';

import { Main, LeftIcon, RightIcon, Text, EditInput } from './TodoItem.styles';

type Props = {
  id: number,
  text: string,
  completed: boolean,
  isEdited: boolean,
  saveUpdate: (id: number, text: string) => void,
  cancelUpdate: void => void,
  editMode: void => void,
  toggle: void => void,
  delete: void => void,
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
    this.editInput = null;
  }

  editInput: ?HTMLInputElement;

  handleEditTodo = (e: Object) => {
    const newText = e.target.value;
    this.setState(() => ({ text: newText }));
  };

  handleEditMode = (e: Object) => {
    this.props.editMode();
    this.setState(() => ({ text: this.props.text }));
  };

  handleKeyDown = (e: Object) => {
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

// TodoItem.propTypes = {
//   id: PropTypes.number.isRequired,
//   text: PropTypes.string.isRequired,
//   completed: PropTypes.bool.isRequired,
//   isEdited: PropTypes.bool.isRequired,
//   editMode: PropTypes.func.isRequired,
//   saveUpdate: PropTypes.func.isRequired,
//   cancelUpdate: PropTypes.func.isRequired,
//   toggle: PropTypes.func.isRequired,
//   delete: PropTypes.func.isRequired,
// };

export default TodoItem;
