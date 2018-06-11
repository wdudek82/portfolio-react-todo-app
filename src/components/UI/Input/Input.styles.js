import styled, { css } from 'styled-components';

export const InputFieldCSS = css`
  flex: 1;
  border: none;
  border-bottom: 1px solid #bbb;
  padding: 0.7rem;
  height: 2.05rem;
  outline: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;

  :focus {
    border-bottom: 1px solid #333;
  }
`;

export const InputField = styled.input`
  ${InputFieldCSS};
`;
