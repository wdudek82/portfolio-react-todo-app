import React from 'react';
import { InputFieldCSS } from '../../UI/Input/Input';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Main = Container.extend`
  width: 300px;
  min-height: 50px;
  margin: 0.5rem 0;
  /* padding: 1rem 0; */
  border: 1px solid #ccc;
  border-radius: 3px;
  user-select: none;
  word-break: break-all;

  :hover {
    box-shadow: 3px 3px 15px 2px #bbb;
  }
`;

const LeftIcon = Container.extend`
  padding: 0 0 0 1rem;
  cursor: ${props => props.completed ? 'default' : 'pointer'};

  i {
    color: ${props => {
        if (props.completed) {
          return '#bbb';
        } else if (props.edited) {
          return '#b60505';
        }
        return 'black';
      }
    };
  }
`;

const Text = Container.extend`
  color: ${props => props.completed ? '#bbb' : '#333'};
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  padding: 1rem;
  width: 100%;
  /* height: 100%; */
`;

const RightIcon = Container.extend`
  padding: 0 1rem 0 0;

  i {
    color: ${props => props.edited ? '#036a03' : '#333'};

    :hover {
      cursor: pointer;
      font-weight: bold;
    }
  }
`;

const EditInput = styled.input`
  ${InputFieldCSS}
  height: 19px;
  padding: 0;
  margin: 1rem;
  font-size: 1rem;
`;

class TodoItem extends React.Component {
  state = {
    text: ''
  }

  handleEditTodo = (e) => {
    const newText = e.target.value;
    this.setState(() => ({ text: newText }));
  }

  handleEditMode = () => {
    this.props.editMode();
    this.setState(() => ({ text: this.props.text }));
  }

  render() {
    let content = (
      <Main>
        <LeftIcon onClick={this.handleEditMode} completed={this.props.completed}>
          <i className="fas fa-pencil-alt"></i>
        </LeftIcon>
        <Text
          onClick={this.props.toggle}
          completed={this.props.completed}
        >
          {this.props.text}
        </Text>
        <RightIcon onClick={this.props.delete}>
          <i className="far fa-times-circle"></i>
        </RightIcon>
      </Main>
    );
  
    if (this.props.isEdited) {
      content = (
        <Main>
          <LeftIcon onClick={this.props.cancelUpdate} edited={this.props.isEdited}>
            <i className="fas fa-ban"></i>
          </LeftIcon>
          <EditInput
            type="text"
            value={this.state.text}
            onChange={this.handleEditTodo}
          />
          <RightIcon
            onClick={() => this.props.saveUpdate(this.props.id, this.state.text)}
            edited={this.props.isEdited}
          >
            <i className="far fa-check-circle"></i>
          </RightIcon>
        </Main>
      );
    } 
  
    return content;
  }
};

export default TodoItem;
