import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  margin-top: 1rem;
  background: none;
  border: 1px solid #bbb;
  border-radius: 5%;
  padding: 0.7rem;
  outline: none;

  :hover {
    background: #ddd;
  }

  :disabled {
    background: #ddd;
    cursor: not-allowed;
  }
`;

const Button = (props) => (
  <Btn
    disabled={props.disabled}
    onClick={props.clicked}
  >
    {props.text}
  </Btn>
);

export default Button;