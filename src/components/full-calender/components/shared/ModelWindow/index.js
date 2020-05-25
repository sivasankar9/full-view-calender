import './style.css';
import React, { useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';


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
             <Dialog onClose={props.handleModelCloseButton} aria-labelledby='customized-dialog-title' open={props.handleModelOpenButton}>
               
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

    // const getIndex = (id, props)=>{
    //  for (let i=0;i<(props.length);i++) {
    //    if (props[i].value === id)
    //         return i;
    //  }
    //  return '';
    // };

    const selectHandler = (e) => {
        const ObjId = e.target.value;

        const slectedItem = props.newCalender.filter(item=>item.ObjId === ObjId);

        updateModelState({...modelState, ObjId: e.target.value, color: slectedItem[0].color});
    };

    const priorityhandler=(e)=>{

        updateModelState({...modelState, priorityId: e.target.value});
    };

console.log(">>>", props.newCalender[0]);
    return <div>
      
            <form className={classes.root} noValidate autoComplete='off'>
            <TextField id='standard-basic'
                label='ADD TITLE'
                inputRef={inputEl}
            />
            </form>

            <FormControl className={classes.formControl}>
                <Select onBlur={selectHandler} onChange={selectHandler}  
                  className={classes.selectEmpty}
                  // value={ props.newCalender[0]}
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

                            if (inputStr !== '') {
                                props.handlerClick(inputStr, modelState.ObjId, modelState.priorityId, modelState.color);
                            }
                        }
                        } color='primary'>SAVE
                    </Button>

            </DialogActions>
    </div>;
};
