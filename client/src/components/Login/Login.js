import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

import { 
    Avatar,
    Box, 
    Button, 
    Checkbox,
    FormControlLabel,
    Grid,
    makeStyles,
    Paper,
    TextField,
    Typography,

} from "@mui/material";

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
        ...formState,
        [name]: value,
    });
    };

    // submit form
    const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
        const { data } = await login({
        variables: { ...formState },
        });

        Auth.login(data.login.token);
    } catch (e) {
        console.error(e);
    }

    // clear form values
    setFormState({
        email: '',
        password: '',
    });
    };

    return(
        <Grid container component="main" style={{ marginTop: "15vh"}}>
            <Grid item xs={false} sm={4} md={3.5}/>
            <Grid item xs={6} sm={4} md={4} component={Paper} elevation={6} square>
                <div>
                    <Avatar style={{marginLeft: '45%'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5" style={{marginLeft: '42%'}}>
                        Sign in
                    </Typography>
                    {data ? (
                        <p>
                            Success! You may now head{' '}
                            <Link to="/">back to the homepage.</Link>
                        </p>
                    ) : (
                        <form onSubmit={handleFormSubmit}>
                            <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={formState.email}
                            onChange={handleChange}
                            />
                            <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={formState.password}
                            onChange={handleChange}
                            />
                            <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                            />
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            >
                                Sign In
                            </Button>
                        </form>
                    )}

                    {error && (
                        <div className="my-3 p-3 bg-danger text-white">
                        {error.message}
                        </div>
                    )}
                </div>
            </Grid>
        </Grid>
    )
}