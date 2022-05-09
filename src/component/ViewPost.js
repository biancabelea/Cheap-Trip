import React from 'react';
import logo from './../Logo_Cheap_Trip.png';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button} from '@mui/material'
import './../App.css';
import { Link} from 'react-router-dom';

function ViewPost() {
    return (
        <>
            <CssBaseline/>
            <AppBar position="relative" color="transparent">
                <Toolbar>
                    <img src={logo} width="60 px" height="60 px"/>
                    <Button variant="h6" padding="10px">
                        Trips
                    </Button>
                    <Button variant="h6" padding="10px">
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    );
}
 
export default ViewPost;
