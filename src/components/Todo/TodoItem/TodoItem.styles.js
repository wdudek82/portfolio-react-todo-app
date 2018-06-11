import styled from 'styled-components';
import { InputFieldCSS } from '../../UI/Input/Input.styles';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Main = Container.extend`
  width: 300px;
  min-height: 50px;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 3px;
  user-select: none;
  word-break: break-all;

  :hover {
    box-shadow: 3px 3px 15px 2px #bbb;
  }
`;

export const LeftIcon = Container.extend`
  padding: 0 0 0 1rem;
  cursor: ${(props) => (props.completed ? 'default' : 'pointer')};

  i {
    color: ${(props) => {
    if (props.completed) {
      return '#bbb';
    } else if (props.edited) {
      return '#036a03';
    }
    return 'black';
  }};

    :hover {
      font-weight: bold;
    }
  }
`;

export const Text = Container.extend`
  color: ${(props) => (props.completed ? '#bbb' : '#333')};
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  padding: 1rem;
  width: 100%;
`;

export const RightIcon = Container.extend`
  padding: 0 1rem 0 0;

  i {
    color: ${(props) => (props.edited ? '#b60505' : '#333')};

    :hover {
      cursor: pointer;
      font-weight: bold;
    }
  }
`;

export const EditInput = styled.input`
  ${InputFieldCSS}
  background: #fbffac;
  height: 19px;
  padding: 0;
  margin: 1rem;
  font-size: 1rem;
`;
