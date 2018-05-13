import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sandbox from './components/Sandbox/Sandbox';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Sandbox />
      </div>
    );
  }
}

export default App;
