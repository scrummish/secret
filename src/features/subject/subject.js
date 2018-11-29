import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Title from './components/title';
import Header from './components/header';
import SubHeader from './components/sub-header';
import Content from './components/content';
import styles from './subject.module.scss';

const Subject = ({ title }) => {
    return (
        <section className={ styles.subject }>  
            <Card raised={ true } className={ styles['subject__header'] }>
                <Header title={ <Title title={ title } /> } />
                <SubHeader/>
            </Card>
            <Content/>
        </section>
    )
}

Subject.defaultProps = {
    title: 'Title'
}

Subject.propTypes = {
    title: PropTypes.string
}

export default Subject;