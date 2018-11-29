import React from 'react';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import styles from './content.module.scss';

const Content = ({ children }) => <Card raised={true} className={styles.content}> { children } </Card>

Content.defaultProps = {
    children: undefined
}

Content.propTypes = {
    children: PropTypes.node
}

export default Content;