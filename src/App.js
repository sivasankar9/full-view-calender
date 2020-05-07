import { Route, BrowserRouter as Router } from "react-router-dom";
import AuthRoute from './components/full-calender/components/shared/auth-route';
import EventCalender from './components/full-calender';
import Loader from './components/full-calender/components/shared/loader';
import Login from './components/full-calender/components/shared/login';
import React from 'react';

export default ({ history }) =>
    <Router history={history}>
        <div>
            <Loader />

            <AuthRoute path='/' >
                <Login />
            </AuthRoute>
            
    <Route strict path='/calender' component={EventCalender} />
        </div>
    </Router>;



