import React from 'react';
import styles from './input.module.scss';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';

class InputField extends React.Component {
    render() {
      return (
        <>
            <FormControl>
                <Input/>
            </FormControl>
        </>
      );
    }
  }
  
  export default InputField;