import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Todo from './components/Todo/Todo';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Todo />
      </div>
    );
  }
}

export default App;
