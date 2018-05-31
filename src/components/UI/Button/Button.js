import React from 'react';
import styled from 'styled-components';

const btnSizeHandler = ({ size }) => {
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
  margin-bottom: ${(props) => (props.mb ? props.mb : 0)};
  margin-left: ${(props) => (props.ml ? props.ml : 0)};
  margin-right: ${(props) => (props.mr ? props.mr : 0)};
  margin-top: ${(props) => (props.mt ? props.mt : 0)};
  background: none;
  border: 1px solid #bbb;
  border-radius: 5%;
  padding: ${btnSizeHandler};
  outline: none;

  :hover {
    box-shadow: ${props => props.pressed ? '3px 3px 15px 2px #ccc inset' : '3px 3px 15px 2px #ccc'};
  }

  :disabled {
    background: #eee;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

class Button extends React.Component {
  state = {
    pressed: false,
  };

  render() {
    return (
      <Btn
        disabled={this.props.disabled}
        onClick={this.props.clicked}
        onMouseDown={() => this.setState(() => ({ pressed: true }))}
        onMouseUp={() => this.setState(() => ({ pressed: false }))}
        onMouseLeave={() => this.setState(() => ({ pressed: false }))}
        size={this.props.size}
        mb={this.props.mb}
        ml={this.props.ml}
        mr={this.props.mr}
        mt={this.props.mt}
        pressed={this.state.pressed}
      >
        {this.props.text}
      </Btn>
    );
  }
}

export default Button;
