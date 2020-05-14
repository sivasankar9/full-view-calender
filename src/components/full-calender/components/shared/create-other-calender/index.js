import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { isEmpty } from './../utilities/isEmpty'
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

    return (
        <form className={classes.root} noValidate autoComplete='off'>
            <TextField id='standard-basic' label='Other Calender' inputRef={inputElement} />
            <Button variant='contained' color='primary'
                onClick={() => {
                    const inputStr = inputElement.current.value;

                    if (isEmpty(inputStr)) {
                        handlerCreateEvent(inputStr);
                    }
                    inputElement.current.value = "";
                }
                }>
                Create
      </Button>
        </form>
    );
};
