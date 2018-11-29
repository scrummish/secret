import React from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

const Form = ({ children }) => <div className={styles.form}> { children } </div>

Form.defaultProps = {
    children: undefined
}

Form.propTypes = {
    children: PropTypes.node
}

export default Form;