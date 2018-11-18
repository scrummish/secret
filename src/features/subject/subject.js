import React from 'react';
import SubjectWrapper from './components/subject-wrapper';
import SubjectHeader from './components/subject-header';
import SubHeader from './components/subject-sub-header';
import SubjectContent from './components/subject-content';

const Subject = props =>{ 
    return (
        <SubjectWrapper
            subjectheader={ <SubjectHeader subject={props.name} className="heading__superhero"/> }
            subheader={ <SubHeader/> }
            content={ <SubjectContent/> } />
    )
}

export default Subject;