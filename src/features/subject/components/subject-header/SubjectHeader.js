import React from 'react';
import PropTypes from 'prop-types';
import styles from './SubjectHeader.module.scss';

const Header = ({ className, subject })=>{
    const classNames = [styles['header__title'], className].join(' ');

    return (
        <div className={styles.header}>
            <h2 className={classNames}> { subject } </h2>
        </div> 
    )
}

Header.defaultProps = {
    subject: 'Unknown',
    className: 'heading__secondary'
}

Header.propTypes = {
    subject: PropTypes.string,
    className: PropTypes.string
}

export default Header;