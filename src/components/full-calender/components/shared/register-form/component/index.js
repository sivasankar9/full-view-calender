import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import TextErrorField from '../../text-field-error-register-form';
import TextField from '@material-ui/core/TextField';
import {isEmpty} from './../../utilities';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "red"
  }
}));

export default function Register(props) {

  const classes = useStyles();
  const [error, updateError] = useState(false);

  const handlerRegisterClick = (props)=>{
    const {registerFormEmail: {value: email}, registerFormPassword: {value: password}, registerFormUsername: {value: username}} = props;

    props.registerUserDetails({username, password, email});
  };

  const validateForm = (props) => {

    const {registerFormEmail: {error: emailError}, registerFormPassword: {error: passwordError}, registerFormUsername: {error: usernameError}} = props;

    const flg = [!emailError, !passwordError, !usernameError].every(a => a);

    return flg;
  };

  const userhandlerBlur = (e) => {

    if (isEmpty(e.target.value)) {
      updateError(true);
      props.userAvailability(e.target.value);
    } 
  };
  
  const userhandlerChange = (e) => {
    props.userAvailabilityReset({ username: e.target.value });

  };

  const emailhandlerBlur = (e) => {

    if (isEmpty(e.target.value)) {
      updateError(true);
      props.emailAvailability(e.target.value);
    }
  };
  const emailhandlerChange = (e) => {
    props.emailAvailabilityReset({ email: e.target.value });

  };
  const passwordhandlerBlur = (e) => {

    if (isEmpty(e.target.value)) {
      props.passwordAvailability(e.target.value);
    }
  };
  const passwordhandlerChange = (e) => {
    props.passwordAvailabilityReset({ password: e.target.value });

  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete='fname'
                name='firstName'
                variant='outlined'
                required
                defaultValue={props.registerFormUsername.value}
                fullWidth
                id='firstName'
                label='User Name'
                onBlur={userhandlerBlur}
                onChange={userhandlerChange}
                />
                <TextErrorField
                  helperText={()=>{

                    const [mySplit, ...mySlice] = props.registerFormUsername.message.split(' ');
                    const isAvailable = props.registerFormUsername.error;

                    return <p className={isAvailable? 'MuiFormHelperText-root Mui-error':'MuiFormHelperText-roott Mui-error'}><b>{mySplit}</b> {mySlice.join(' ')}</p>;
                  }}
                  userError = {props.registerFormUsername.error}
                  error = {error}
                  className = 'MuiFormHelperText-root Mui-error'
                  />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                defaultValue={props.registerFormEmail.value}
                autoComplete='email'
                onBlur={emailhandlerBlur}
                onChange={emailhandlerChange}
                />
              <TextErrorField
                  helperText={()=><p className = 'MuiFormHelperText-root Mui-error'>{props.registerFormEmail.message}</p>}
                  error = {error}
                  />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                defaultValue={props.registerFormPassword.value}
                onChange={passwordhandlerChange}
                onBlur={passwordhandlerBlur}
                autoComplete='current-password'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            disabled={!validateForm(props)}
            className={classes.submit}
            onClick = {(event)=>{
              event.preventDefault();
              handlerRegisterClick(props);
            }
            }
          >
            REGISTER
          </Button>
        </form>
      </div>
    </Container >
  );
}
