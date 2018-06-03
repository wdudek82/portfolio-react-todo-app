import React from 'react';
import PropTypes from 'prop-types';

import { Main, LeftIcon, RightIcon, Text, EditInput } from './TodoItem.styles';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
    };
    // this.editInutRef = React.createRef();
    this.editInput = null;
  }

  // componentDidMount() {
  //   console.log(this.editInutRef);
  //   if (this.editInput) {
  //     console.log(this.editInput);
  //     // console.log(this.editInput.getDOMNode());
  //     this.editInput.focus();
  //     // console.log(this.editInutRef.focus());
  //   }
  // }

  handleEditTodo = (e) => {
    const newText = e.target.value;
    this.setState(() => ({ text: newText }));
  };

  handleEditMode = (e) => {
    this.props.editMode();
    this.setState(() => ({ text: this.props.text }));
  };

  handleKeyDown = (e) => {
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

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  isEdited: PropTypes.bool.isRequired,
  editMode: PropTypes.func.isRequired,
  saveUpdate: PropTypes.func.isRequired,
  cancelUpdate: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
};

export default TodoItem;
