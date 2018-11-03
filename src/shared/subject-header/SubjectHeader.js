import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import styles from './SubjectHeader.module.scss';

const Header = ({subject})=>(
    <div className={styles.header}> 
        <AppBar className={styles['header-container']} position="relative">
            <h2 className={styles['header-title']}> {subject} </h2>
        </AppBar>
    </div>
)

Header.defaultProps = {
    subject: 'Unknown'
}

Header.propTypes = {
    subject: PropTypes.string
}

export default Header;