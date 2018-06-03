import styled from 'styled-components';
import { InputFieldCSS } from '../UI/Input/Input';

export const Container = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  padding: 2rem;
  width: 500px;
  box-shadow: 3px 3px 15px #000;
`;

export const P = styled.p`
  margin: 1.5rem 0;
  font-size: 1.5rem;
  color: #ccc;
`;

export const H1 = styled.h1`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0rem 0 1rem 0;
  font-weight: 300;
  border: 1px dotted transparent;
  min-height: 66px;
  padding: 0 1rem;
  width: 350px;
  word-break: break-all;

  i {
    display: none;
    position: absolute;
    font-size: 0.7rem;
    right: 4px;
    top: 4px;
  }

  :hover {
    border: 1px dotted black;

    i {
      display: inline-block;
      color: #bbb;

      :hover {
        color: #000;
        cursor: pointer;
      }
    }
  }
`;

export const HeaderInput = styled.input`
  ${InputFieldCSS} background: #fbffac;
  font-size: 2rem;
  font-weight: 300;
  margin: 0 1rem;
  width: 300px;
`;
