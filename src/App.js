import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Todo from './components/Todo/Todo';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Todo} />
          <Route render={(props) => {
              const path = props.location.pathname;
              return <h3>Ooops! Page {path} not found!</h3>
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
