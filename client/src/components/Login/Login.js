import React from "react";
import { 
    Avatar,
    Box, 
    Button, 
    Checkbox,
    FormControlLabel,
    Grid,
    Link,
    makeStyles,
    Paper,
    TextField,
    Typography,

} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export const Login = () => {
    return(
        <Grid container component="main" style={{ marginTop: "15vh"}}>
            <Grid item xs={false} sm={4} md={3.5}/>
            <Grid item xs={6} sm={4} md={4} component={Paper} elevation={6} square>
                <div>
                    <Avatar>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form noValidate>
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
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
        </Grid>
    )
}