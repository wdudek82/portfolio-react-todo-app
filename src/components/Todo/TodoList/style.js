import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 1rem auto;
  background: #fff;
  color: #000;
  
  @media (min-width: 480px) {
    max-width: 600px; 
  }
`;

export const Header = styled.div`
  background: #ffff8c;
  color: #000;
`;

export const ListBody = styled.div`
`;