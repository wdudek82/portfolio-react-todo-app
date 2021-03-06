import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Clock from '../Miscellaneous/Clock/Clock';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background: rgba(0, 0, 0, 0.6);
  height: 50px;
`;

const Brand = styled.div`
  color: white;
  font-weight: 700;
  width: 232px;
`;

const RightMenu = styled.div`
  display: none;
  width: 232px;

  @media (min-width: 600px) {
    display: flex;

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
    <Brand>ToDo App</Brand>
    <Clock />
    <RightMenu>
      <p>
        <NavLink to="/" exact>Home</NavLink>
      </p>
      <p>
        <NavLink to="/about" exact>About</NavLink>
      </p>
      <p>
        <NavLink to="/logout" exact>Logout</NavLink>
      </p>
    </RightMenu>
  </Nav>
);

export default navbar;
