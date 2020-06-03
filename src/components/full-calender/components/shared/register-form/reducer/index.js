import { combineReducers } from 'redux';
import  email from './e-mail';
import password from './password';
import username from './usename';

export default combineReducers({
    username,
    email,
    password
});
