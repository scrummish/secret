import React, { Component } from 'react';
import styles from './styles.module.scss';
import Form from './components/form';
import Bubbles from './components/bubbles';
import TextField from '@material-ui/core/TextField';

class Login extends Component {
    render() {
      return (
        <div className={ styles.login }>
          <Bubbles/>
            <Form>
              <TextField required fullWidth label="Username" variant="outlined" margin="normal"/>
              <TextField required fullWidth label="Password" variant="outlined" margin="normal" type="password" helperText="Ask your tutor for assistance"/>
            </Form>
        </div>
      );
    }
  }
  
  export default Login;