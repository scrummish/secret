import React, { Component } from 'react';
import styles from './styles.module.scss';

class Login extends Component {
    render() {
      return (
        <div className={styles.login}>
            <div className={styles.container}></div>
            <div className={styles['login__stripe']}></div>
        </div>
      );
    }
  }
  
  export default Login;