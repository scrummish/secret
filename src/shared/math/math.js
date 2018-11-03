import React, { Component } from 'react';
import SubjectHeader from '../components/subject-header';
import styles from './math.module.scss';

class Math extends Component {
  render() {
    return (
      <div className={styles.math}>
        <SubjectHeader subject="math"/>
        <section className={styles['math__content']}></section> 
      </div>
    );
  }
}

export default Math;