import React from 'react';
import logo from './../Logo_Cheap_Trip.png';
import { Typography, AppBar, CssBaseline, Toolbar, Container, Button} from '@mui/material'
import { Stack, ListItem} from '@mui/material';
import './../App.css';
import { Link} from 'react-router-dom';
import {Image} from "@mui/icons-material";

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
            <main>
                <div>
                    <Container maxWidth="sm">
                        <Typography variant="h4" align="center" color="textPrimary" padding="20px" gutterBottom>Title of your trip</Typography>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>Here everyone can see your experiences and help others to have a great holiday</Typography>
                    </Container>
                </div>
                <div>
                    <Stack spacing={2} justifyContent="center" alignItems="center">
                        <ListItem>Nume</ListItem>
                        <ListItem>Destinatie</ListItem>
                        <ListItem>Pret</ListItem>
                        <ListItem>Restaurante</ListItem>
                        <ListItem>Cazare</ListItem>
                        <img height={200} src="https://source.unsplash.com/random"/>
                    </Stack>
                </div>
            </main>
        </>
    );
}
 
export default ViewPost;
