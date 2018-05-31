// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar/Navbar';
import Todo from './Todo/Todo';

const H3 = styled.h3`
  color: white;
`;

const http404 = (props) => {
  const path = props.location.pathname;
  return <H3>Ooops! Page {path} not found!</H3>;
};

const app = (props) => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Todo} />
        <Route render={http404} />
      </Switch>
    </div>
  );
};

http404.propTypes = {
  location: PropTypes.object.isRequired,
};

export default app;
