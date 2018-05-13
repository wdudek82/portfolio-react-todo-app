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
          <Route render={() => <h1>Ooops! No such page found!</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
