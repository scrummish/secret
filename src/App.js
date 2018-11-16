import React, { Component } from 'react';
import Navigation from './features/navigation';
import Subject from './features/subject/components/subject';
import SubjectHeader from './features/subject/components/subject-header';
import SubHeader from './features/subject/components/subject-sub-header';
import SubjectContent from './features/subject/components/subject-content';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Subject 
          subjectheader={ <SubjectHeader subject="math" className="heading__superhero"/> }
          subheader={ <SubHeader/> }
          content={ <SubjectContent/> }
        />
      </div>
    );
  }
}

export default App;
