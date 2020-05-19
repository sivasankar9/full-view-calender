import React, { useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextErrorField from '../text-field-error-register-form';
import TextField from '@material-ui/core/TextField';
import { isEmpty } from '../utilities';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch'
        }
    }
}));

export default ({ handlerCreateEvent }) => {
    const classes = useStyles();
    const inputElement = useRef(null);
    const [error, updateError] = useState(false);

    return (
        <form className={classes.root} noValidate autoComplete='off'>
            <TextField id='standard-basic'
                label='New Calender'
                inputRef={inputElement}
                onFocus={() => {
                    updateError(false);
                }}
            />
            <TextErrorField
                error={error}
                helperText={()=><p className = 'MuiFormHelperText-root Mui-error'>Enter new calender name</p>}
                className = 'MuiFormHelperText-root Mui-error'
            />
            <Button variant='contained' color='primary'
                onClick={() => {
                    const inputStr = inputElement.current.value;

                    if (isEmpty(inputStr)) {
                        handlerCreateEvent(inputStr);
                    } else {
                        updateError(true);
                    }
                    inputElement.current.value = "";
                }
                }>
                Create
      </Button>
        </form>
    );
};
