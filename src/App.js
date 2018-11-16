import React, { Component } from 'react';
import Navigation from './features/navigation';
import Subject from './features/subject/components/subject';
import './App.scss';

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
