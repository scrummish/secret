import React from 'react';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import styles from './SubjectContent.module.scss';

const SubjectContent = ({className})=>{
    const classNames = [styles.content, className].join(' ');

    return (
        <Card raised={true} className={classNames}></Card>
    )
}

SubjectContent.defaultProps = {
    className: '',
}

SubjectContent.propTypes = {
    className: PropTypes.string,
}

export default SubjectContent;