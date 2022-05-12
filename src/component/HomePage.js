import React, { Component } from 'react';
import logo from './../Logo_Cheap_Trip.png';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import './../App.css';
import { Link, useNavigate} from 'react-router-dom';

const cards=[1,2,3,4,5,6,7,8,9]

function HomePage() {
  let navigate = useNavigate();
    return (
      <>
        <CssBaseline />
        <AppBar position="relative" color="transparent">
          <Toolbar>
          <img src={logo} width="60 px" height="60 px"/>
          <Button variant="h6" padding="10px">
            Trips
          </Button>
          <Button variant="h6" padding="10px" onClick={() => navigate('/Login')}>
            Login
          </Button>
          </Toolbar>
        </AppBar>
        <main>
         <div>
          <Container maxWidth="sm">
            <Typography variant="h3" align="center" color="textPrimary" padding="20px" gutterBottom>All trips</Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>Here you can find a lovely community of travelers who like to organize their trips on a budget. You can upload your own experiences and help us expand our community.</Typography>
          
          </Container>
          </div>
          <div position="fixed">
            <Container maxWidth="lg" className='container'>
              <Grid container spacing={4} className="cardGrid">
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={3}>
                  <Card className="card">
                    <CardMedia
                      className = "cardMedia"
                      image = "https://source.unsplash.com/random"
                      title = "trip title"
                    />
                    <CardContent className="cardContent">
                      <Typography gutterBottom variant="h5">
                        Heading
                      </Typography>
                      <Typography>
                        This is a media card. Here you will see the content.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => navigate('/ViewPost')} size="small" marginTop="50px" color="primary">View</Button>
                    </CardActions>
                  </Card>
                </Grid>
                ))}
              </Grid>

            </Container>
          </div>
          <div style={{ display: "flex" }}>
          <Fab className="fab" color="error" style={{ marginLeft: "auto" }} onClick={() => navigate('/AddPost')} aria-label="add">
                <AddIcon />
          </Fab>
        </div>
        </main>
        
      </>    
    );
  }

  export default HomePage;