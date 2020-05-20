import { Redirect, Route } from "react-router";
import React from "react";
import { connect } from "react-redux";

const AuthRoute = props => {

  const { data } = props;

  if (data.isLogin) {

    return <Redirect to='/calender' />;
  }

  return <Route {...props} />;
};

const mapStateToProps = state => ({
  data: state.loginCalender.login
});

export default connect(mapStateToProps)(AuthRoute);
