import React, {useState} from 'react';
import { Button, TextField, Typography } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
}

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
                Login
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
            {(props.error || error) && (
                <Alert severity='error' onClick={() => setError(null)}>
                    {props.error || error}
                </Alert>
            )}

        </form>
    );
};
{/* <div> */ }
//     <label>
//         userName
//     </label>
//     <input type = "text"></input>

//     <label>
//         password
//     </label>
//     <input type = "password"></input>

//     <button onClick = {()=>{
//         props.login({username:"siva",password:"1254"})
//     }}>login</button>
//     </div>



