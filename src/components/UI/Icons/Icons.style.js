import styled from 'styled-components';

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerRed = IconContainer.extend`
  padding: 0 1rem 0 0;

  i {
    color: ${(props) => (props.edited ? '#b60505' : '#333')};

    :hover {
      cursor: pointer;
      font-weight: bold;
    }
  }
`;

export const ContainerGreen = IconContainer.extend`
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
