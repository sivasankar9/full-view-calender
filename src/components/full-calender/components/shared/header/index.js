import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Welcome from '../user-greeting';
import { connect } from 'react-redux';
import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  userInfo: {
    position: 'relative',
    color: 'red',
    marginRight: theme.spacing(2)

  }
}));

const Header = (props)=> {
  const classes = useStyles();

  return (
    <div >
      <AppBar position='static'>
        <Toolbar>
          <Typography className={classes.title} variant='h6' noWrap>
            Calender
          </Typography>
          <Typography variant='h6' className={classes.userInfo}>
            <Welcome loginDetails = {props.loginDetails}/>
         </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => ({
  loginDetails: state.loginCalender.login
});

export default connect(mapStateToProps, null)(Header);
