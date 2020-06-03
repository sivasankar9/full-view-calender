import '@date-io/date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import DateFnsUtils from '@date-io/date-fns';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import Dialog from '@material-ui/core/Dialog';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';
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

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary
  }
}));


export default (props) =>{
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const classes = useStyles();

    return props.modelShow ?
    <div>
    
      <Dialog onClose={props.handleReadModeModelClose} aria-labelledby='customized-dialog-title' open={props.handleReadModeModelOpen}>
      <Grid container className={classes.root}>
      <Grid item xs={8} onClick = {()=>props.handleIsDeleted(props.state.eventsClick.eventId)}>
        <DeleteSharpIcon />
      </Grid>
    </Grid>
    <Grid container className={classes.root}>
      <Grid item xs={8} onClick = {props.handleIsEditable} >
        <EditIcon />
      </Grid>
    </Grid>
        <DialogTitle id='customized-dialog-title' onClose={props.handleReadModeModelClose}/>
        {
           props.state.isEditable? (<form className={classes.root} noValidate autoComplete='off'>
           <TextField id='standard-basic'
           defaultValue = {props.state.myText}
           isEditable = {true}
           />
           </form>): null
          }
        <DialogContent dividers>
        {
          props.state.isEditable?null:(<Typography gutterBottom> 
          {props.state.myText}
          </Typography>)
        }
         
         <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify='space-around'>
                  <KeyboardDatePicker
                    disableToolbar
                    variant='inline'
                    format='MM/dd/yyyy'
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
        </DialogContent>
        <Button color='primary'>SAVE </Button>
      </Dialog>
    </div>:null;
};
