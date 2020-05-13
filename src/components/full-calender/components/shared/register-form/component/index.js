import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import {isEmpty} from './../../utilities/isEmpty'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "red"
  },
  buttonOff: {
    margin: theme.spacing(3, 0, 2),
    color: "white"
  }
}));

export default function Register(props) {

  const classes = useStyles();

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
      props.userAvailability(e.target.value);
    }
  };
  
  const userhandlerChange = (e) => {
    props.userAvailabilityReset({ username: e.target.value });

  };

  const emailhandlerBlur = (e) => {

    if (isEmpty(e.target.value)) {
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
                helperText={props.registerFormUsername.message}
                id='firstName'
                label='User Name'
                autoFocus
                onBlur={userhandlerBlur}
                onChange={userhandlerChange}
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
                helperText={props.registerFormEmail.message}
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
