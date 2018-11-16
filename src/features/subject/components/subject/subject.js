import React from 'react';
import Card from '@material-ui/core/Card';
import styles from './subject.module.scss';

const Subject = (props)=> {
    return (
      <div className={styles.subject}>
        <Card raised={true} className={styles['subject__header']}>
          {props.subjectheader}
          {props.subheader}
        </Card>
        {props.content}
      </div>
    );
}

export default Subject;