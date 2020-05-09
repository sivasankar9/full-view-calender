import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Welcome from '../user-greeting';
import { connect } from 'react-redux';
import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  userInfo: {
    position: 'relative',
    color: 'white',
    marginRight: theme.spacing(2)

  }
}));

const Header = (props)=> {
  const classes = useStyles();

  return (
    <div >
      <AppBar position='static'>
        <Toolbar>
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
