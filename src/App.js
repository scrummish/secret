import React, { Component } from 'react';
import Login from './features/login';
import Navigation from './features/navigation';
import './App.scss';

import subjectModule from './features/subject';
const { Subject } = subjectModule;

class App extends Component {
  render() {
    return (
      <>
        <Login/>
      </>
    );
  }
}

export default App;
