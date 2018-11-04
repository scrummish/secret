import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import styles from './SubjectHeader.module.scss';

const Header = ({ className, subject })=>{
    const classNames = [styles['header__title'], className].join(' ');

    return (
        <AppBar className={styles.header} position="relative">
            <h2 className={classNames}> { subject } </h2>
        </AppBar> 
    )
}

Header.defaultProps = {
    subject: 'Unknown',
    className: ''
}

Header.propTypes = {
    subject: PropTypes.string,
    className: PropTypes.string
}

export default Header;