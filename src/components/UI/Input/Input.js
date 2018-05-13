import React from 'react';
import styled from 'styled-components';

const InputField = styled.input`
  flex: 1;
  border: 1px solid #bbb;
  padding: 0.7rem;
  height: 2.05rem;
  outline: none;
  font-family: 'Roboto', sans-serif;
`;

const input = (props) => (
  <InputField
    name={props.name}
    type={props.type}
    value={props.value}
    placeholder={props.placeholder}
    onChange={props.changed}
  />
);

export default input;