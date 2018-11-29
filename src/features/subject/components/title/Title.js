import React from 'react';
import styles from './title.module.scss';
import PropTypes from 'prop-types';

const Title = ({ title }) => <h2 className={ styles.title + " heading__superhero" }> { title } </h2>


Title.defaultProps = {
    title: 'Title'
}

Title.propTypes = {
    title: PropTypes.string
}

export default Title;