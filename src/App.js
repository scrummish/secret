import React, { Component } from 'react';
import Navigation from './features/navigation';
import './App.scss';

import subjectModule from './features/subject';
const { Subject } = subjectModule;

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Subject/>
      </div>
    );
  }
}

export default App;
