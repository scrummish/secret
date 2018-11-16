import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import SubjectHeader from '../subject-header';
import SubHeader from '../subject-sub-header';
import SubjectContent from '../subject-content';
import styles from './subject.module.scss';

class Subject extends Component {
  render() {
    return (
      <div className={styles.subject}>
        <Card raised={true} className={styles['subject__header']}>
          <SubjectHeader subject="math" className="heading__superhero"/>
          <SubHeader/>
        </Card>
        <SubjectContent className={styles['subject__content']}/>
      </div>
    );
  }
}

export default Subject;