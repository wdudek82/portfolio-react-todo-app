import React from 'react';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 300px;
`;

const todoForm = (props) => (
  <Wrapper>
    <Input
      type="text"
      placeholder="New Item"
    />
    <Button
      text="Add"
      size="sm"
      mb="1rem"
    />
  </Wrapper>
);

export default todoForm;