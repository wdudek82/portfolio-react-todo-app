import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Todo from './Todo/Todo';

const http404 = (props) => {
  const path = props.location.pathname;
  return <h3>Ooops! Page {path} not found!</h3>;
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
