import './style.css';
import React from 'react';

const TextFieldError = (props)=>{
    return <React.Fragment>
             {
                 props.error?
                 <div>{props.helperText()}</div>
                    :null
             }
    </React.Fragment>;
};

TextFieldError.defaultProps  = {
    error: false
};

export default TextFieldError;
