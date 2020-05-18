import './style.css';
import React from 'react';

const TextFieldError = (props)=>{
    const mySplit = props.helperText.split(' ');
    const mySlice = mySplit.slice(1).join(' ');

    return <React.Fragment>
             {
                 props.error?
             <p className = {props.userError ?
                'MuiFormHelperText-root Mui-error':
             'MuiFormHelperText-roott Mui-error'}><b>{mySplit[0]}</b> {mySlice}</p>
                    :null
             
             }
    </React.Fragment>;
};

TextFieldError.defaultProps  = {
    userError: false,
    error: false
};

export default TextFieldError;
