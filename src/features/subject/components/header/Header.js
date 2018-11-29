import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.scss';

const Header = ({ title }) => <div className={ styles.header }> { title } </div> 

Header.defaultProps = {
    title: undefined
}

Header.propTypes = {
    title: PropTypes.node
}

export default Header;