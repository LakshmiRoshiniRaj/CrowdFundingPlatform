import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const backgroundImageUrl = 'url("https://cdn.photoroom.com/v1/assets-cached.jpg?path=backgrounds_v3/black/Photoroom_black_background_extremely_fine_texture_only_black_co_b99c8103-0e9c-41eb-a7f8-4f121d0a28cb.jpg")';

const Login = () => {
    const paperStyle = { padding: 20, width: 400, margin: '0 auto', backgroundColor: 'rgba(255, 255, 255, 0.9)' };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const btnstyle = { margin: '8px 0' };

    return (
        <div style={{
            backgroundImage: backgroundImageUrl,
            backgroundSize: 'cover',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign In</h2>
                    <Typography variant='caption' gutterBottom>
                        Please enter your credentials to log in.
                    </Typography>
                </Grid>
                <form>
                    <TextField label='Username' placeholder='Enter username' fullWidth required/>
                    <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                    <FormControlLabel
                        control={<Checkbox name="checkedB" color="primary"/>}
                        label="Remember me"
                        labelPlacement="end"
                    />
                   <Button type='submit' color='black' variant="contained" style={btnstyle} fullWidth><Link a ="/home" > Sign in</Link></Button>
                </form>
                <Typography align='center'>
                    <Link href="/forgotpassword" >
                        Forgot password?
                    </Link>
                </Typography>
                <Typography align='center'>
                    Do you have an account? 
                    <Link href="/register">
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </div>
    );
};

export default Login;
