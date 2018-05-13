import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background: black;
  height: 50px;
`;

const Brand = styled.div`
  color: white;
  font-weight: 700;
`;

const RightMenu = styled.div`
  display: flex;

  @media (min-width: 480px) {
    p {
      margin: 0 1rem;
    }
    
    a {
      color: white;
      text-decoration: none;
    }
  }
`;

const navbar = (props) => (
  <Nav>
    <Brand>Logo</Brand>
    <RightMenu>
      <p><a href="/">Todo List</a></p>
      <p><a href="/help">Help</a></p>
      <p><a href="/logout">Log Out</a></p>
    </RightMenu>
  </Nav>
);

export default navbar;