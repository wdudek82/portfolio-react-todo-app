import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar/Navbar';
import Todo from './Todo/Todo';

const Div = styled.div`
  /* background: url(
    'https://pics.freeartbackgrounds.com/Sunset_Over_Ocean_Background-1175.jpg'
  ); */
`;

const http404 = (props) => {
  const path = props.location.pathname;
  return <h3>Ooops! Page {path} not found!</h3>;
};

const app = (props) => {
  return (
    <Div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Todo} />
        <Route render={http404} />
      </Switch>
    </Div>
  );
};

http404.propTypes = {
  location: PropTypes.object.isRequired,
};

export default app;
