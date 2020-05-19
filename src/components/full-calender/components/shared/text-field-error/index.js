import './style.css';
import React from 'react';

const TextFieldError = (props)=>{
    return <React.Fragment>
             {
                 props.error?
                    <p className = 'MuiFormHelperText-root Mui-error'>{props.helperText}</p>
                    :null
             
             }
    </React.Fragment>;
};

TextFieldError.defaultProps  = {
    error: false
};

export default TextFieldError;
