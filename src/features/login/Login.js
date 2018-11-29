import React, { Component } from 'react';
import styles from './styles.module.scss';
import Form from './components/form';

class Login extends Component {
    render() {
      return (
        <div className={ styles.login }>
            <div className={ styles['login__stripe'] }></div>
            <Form/>
        </div>
      );
    }
  }
  
  export default Login;