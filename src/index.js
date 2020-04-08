import React from 'react';
import { render } from 'react-dom';
import './style.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux'
import calenderEvents from './components/full-calender/reducer';

let store = createStore(combineReducers({
    fullCalender:calenderEvents,

}))

render(<Provider store = {store}>
    <App />
    </Provider>,document.getElementById('root'));
