import React from 'react';
import PropTypes from 'prop-types';
import styles from './SubHeader.module.scss';

const SubHeader = ({ children }) => <div className={styles['sub-header']}> { children } </div>

SubHeader.defaultProps = {
    children: undefined
}

SubHeader.propTypes = {
    children: PropTypes.node
}

export default SubHeader;