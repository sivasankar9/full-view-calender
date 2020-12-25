import '@date-io/date-fns';
import './style.css';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import React, { useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import DateFnsUtils from '@date-io/date-fns';
import Dialog from '@material-ui/core/Dialog';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2)
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  });

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch'
        }
    }
}));
  
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant='h6'>{children}</Typography>
        {onClose ? (
          <IconButton aria-label='close' className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2)
    }
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1)
    }
  }))(MuiDialogActions);

export default ({ hasEvents, ...props }) => {

    return props.modelShow ?
        <div>
             <Dialog onClose={props.handleModelCloseButton} aria-labelledby='customized-dialog-title' open={props.handlerDateClick}>
               
                <DialogTitle id='customized-dialog-title' onClose={props.handleModelCloseButton}>
                Create Events
                </DialogTitle>

                <DialogContent dividers>
                    <Typography gutterBottom>
                        {
                             hasEvents ? <ModalForm {...props} /> : <ModalMessage {...props}/>
                        }
                    </Typography>
                </DialogContent>
            </Dialog>
        </div>:null;
};

const ModalMessage = () => {
    return <h4> OOPPS NO EVENTS CREATE</h4>;
};

const ModalForm = (props) => {

    const classes = useStyles();
    const inputEl = useRef(null);

    const initialState = {
        ObjId: 0,
        priorityId: 0,
        color: 0
    };

    const [modelState, updateModelState] = useState(initialState);

    const [selectedDate, setSelectedDate] = React.useState(new Date(props.state.inputDate));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const selectHandler = (e) => {
        const ObjId = e.target.value;

        const slectedItem = props.newCalender.filter(item=>item.ObjId === ObjId);

        updateModelState({...modelState, ObjId: e.target.value, color: slectedItem[0].color});
    };

    const priorityhandler=(e)=>{

        updateModelState({...modelState, priorityId: e.target.value});
    };

    return <div>
      
            <form className={classes.root} noValidate autoComplete='off'>
            <TextField id='standard-basic'
                label='ADD TITLE'
                inputRef={inputEl}
            />
            </form>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify='space-around'>
                  <KeyboardDatePicker
                    disableToolbar
                    autoOk
                    variant='inline'
                    format='yyyy-MM-dd'
                    margin='normal'
                    id='date-picker-inline'
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                    'aria-label': 'change date'
                    }}
                  />
                </Grid>
           </MuiPickersUtilsProvider>

            <FormControl className={classes.formControl}>
                <Select onBlur={selectHandler} onChange={selectHandler}  
                  className={classes.selectEmpty}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  {
                    props.newCalender.map(item =><MenuItem value={item.ObjId} key={item.id} >{item.label}</MenuItem>)
                  }
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                    <Select onBlur={priorityhandler} onChange = {priorityhandler}
                      className={classes.selectEmpty}
                      inputProps={{ 'aria-label': 'Without label' }}
                    >
                      {
                         props.priorityEvents.map(item => <MenuItem value={item.priorityId} key={item.id}>{item.label}</MenuItem>)
                      }
                    </Select>
            </FormControl>

            <DialogActions>

                    <Button onClick={() => {
                        const inputStr = inputEl.current.value;
                        const inputDate = new Date(selectedDate).toISOString();

                            if (inputStr !== '') {
                                props.handlerClick(inputStr, modelState.ObjId, modelState.priorityId, modelState.color, inputDate);
                            }
                        }
                        } color='primary'>SAVE
                    </Button>

            </DialogActions>
    </div>;
};
