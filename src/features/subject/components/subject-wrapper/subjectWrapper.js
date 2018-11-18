import React from 'react';
import Card from '@material-ui/core/Card';
import styles from './subjectWrapper.module.scss';

const SubjectWrapper = (props)=> {
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

export default SubjectWrapper;