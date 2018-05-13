import React from 'react';
import styled from 'styled-components';

const btnSizeHandler = ({ size }) => {
  console.log(size);
  switch (size) {
    case 'xs':
      return '0.2rem';
    case 'sm':
      return '0.5rem';
    default:
      return '0.8rem';
  }
};

const Btn = styled.button`
  margin-bottom: ${props => props.mb ? props.mb : 0};
  margin-left: ${props => props.ml ? props.ml : 0};
  margin-right: ${props => props.mr ? props.mr : 0};
  margin-top: ${props => props.mt ? props.mt : 0};
  background: none;
  border: 1px solid #bbb;
  border-radius: 5%;
  padding: ${btnSizeHandler};
  outline: none;

  :hover {
    box-shadow: 3px 3px 15px 2px #bbb;
  }

  :disabled {
    background: #ccc;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

const Button = (props) => (
  <Btn
    disabled={props.disabled}
    onClick={props.clicked}
    size={props.size}
    mb={props.mb}
    ml={props.ml}
    mr={props.mr}
    mt={props.mt}
  >
    {props.text}
  </Btn>
);

export default Button;