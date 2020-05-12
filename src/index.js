import './style.css';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import App from './App';
import {Provider} from 'react-redux';
import React from 'react';
import calenderEvents from './components/full-calender/reducer';
import loginCalender from './components/full-calender/components/shared/login/reducer';
import registerFormCalender from './components/full-calender/components/shared/register-form/reducer';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
 

let store = createStore(combineReducers({
    fullCalender: calenderEvents,
    loginCalender: loginCalender,
    registerFormCalender:registerFormCalender
}), compose(
      applyMiddleware(thunkMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ));


render(<Provider store = {store}>
    <App />
    </Provider>, document.getElementById('root'));
