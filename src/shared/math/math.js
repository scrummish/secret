import React, { Component } from 'react';
import SubjectHeader from '../components/subject-header';
import SubHeader from '../components/sub-header';
import styles from './math.module.scss';

class Math extends Component {
  render() {
    return (
      <div className={styles.math}>
        <SubjectHeader subject="math" className="heading__superhero"/>
        <SubHeader/>
        <section className={styles['math__content']}></section> 
      </div>
    );
  }
}

export default Math;