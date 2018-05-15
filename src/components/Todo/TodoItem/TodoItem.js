import React from 'react';
import { InputFieldCSS } from '../../UI/Input/Input';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoItem = Container.extend`
  width: 300px;
  min-height: 50px;
  margin: 0.5rem 0;
  padding: 1rem 0;
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
          return 'red';
        }
        return 'black';
      }
    };
  }
`;

const Text = Container.extend`
  color: ${props => props.completed ? '#bbb' : '#333'};
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  padding: 0 1rem;
  width: 100%;
`;

const RightIcon = Container.extend`
  padding: 0 1rem 0 0;

  i {
    color: ${props => props.edited ? 'green' : '#333'};

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
  margin: 0 1rem;
  font-size: 1rem;
`;

const todoItem = (props) => {
  let content = (
    <TodoItem>
      <LeftIcon onClick={props.edit} completed={props.completed}>
        <i className="fas fa-pencil-alt"></i>
      </LeftIcon>
      <Text
        onClick={props.toggle}
        completed={props.completed}
      >
        {props.text}
      </Text>
      <RightIcon onClick={props.delete}>
        <i className="far fa-times-circle"></i>
      </RightIcon>
    </TodoItem>
  );

  if (props.isEdited) {
    content = (
      <TodoItem>
        <LeftIcon onClick={props.edit} edited={props.edited}>
          <i className="fas fa-ban"></i>
        </LeftIcon>
        <EditInput type="text" value={props.text} onChange={props.edited} />
        <RightIcon onClick={props.edited} edited={props.edited}>
          <i className="far fa-check-circle"></i>
        </RightIcon>
      </TodoItem>
    );
  } 

  return content;
};

export default todoItem;
