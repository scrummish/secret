import React from 'react';
import PropTypes from 'prop-types';
import styles from './SubHeader.module.scss';

const SubHeader = (props)=>(
    <div className={styles.header}> 

    </div>
)

SubHeader.defaultProps = {
    // subject: 'Unknown'
}

SubHeader.propTypes = {
    // subject: PropTypes.string
}

export default SubHeader;