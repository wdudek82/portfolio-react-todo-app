import React from 'react';
import styled from 'styled-components';

const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  height: 50px;
  margin: 0.5rem 0;
  border: 1px solid #bbb;
  user-select: none;

  :hover {
    box-shadow: 3px 3px 15px 2px #bbb;
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.completed ? '#bbb' : '#333'};
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  width: 100%;
  height: 100%;
  padding: 0 1rem;
`;

const Delete = styled.span`
  margin: 0 0.2rem;
  font-size: 0.8rem;
  height: 0;

  :hover {
    cursor: pointer;
    font-weight: bold;
  }
`;

const todoItem = (props) => {
  return (
    <TodoItem>
      <Text
        onClick={props.toggle}
        completed={props.completed}
      >
        {props.text}
      </Text>
      <Delete onClick={props.delete}>x</Delete>
    </TodoItem>
  );
};

export default todoItem;
