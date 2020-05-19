import { Button, TextField, Typography } from "@material-ui/core";
import React, {useState} from 'react';
import {Link} from "react-router-dom";

export default (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const submitForm = () => {
        if (username === "" || password === "") {
            setError("Fields are required");
            return;
        }
        props.login({ username, password });
    };

    return (
        <form>
            <Typography variant='h5' style={{ marginBottom: 8 }}>
                <ul>
                    <li><Link to = '/'>Login</Link></li>
                    <li><Link to = '/register'>Register</Link></li>
                </ul>
          </Typography>
         
            <TextField
                label='Username'
                variant='outlined'
                fullWidth
                className='form-input'
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <TextField
                label='Password'
                variant='outlined'
                fullWidth
                className='form-input'
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <Button
                variant='contained'
                color='primary'
                fullWidth
                className='form-input'
                size='large'
                onClick={submitForm}
            >
                Login
          </Button>
        </form>
    );
};




