import React, { Component, useEffect, useState } from 'react';
import logo from './../Logo_Cheap_Trip.png';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import './../App.css';
import { Link, useNavigate} from 'react-router-dom';

function HomePage() {
  let navigate = useNavigate();
  const [records, setRecords] = useState([]);
 
  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/record/`);
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const records = await response.json();
      setRecords(records);
    }
  
    getRecords();
  
    return;
  }, [records.length]);
  
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
                {records.map((record) => (
                  <Grid item key={record._id} xs={12} sm={6} md={3}>
                  <Card className="card">
                    <CardMedia
                      className = "cardMedia"
                      image = "https://source.unsplash.com/random"
                      title = "trip title"
                    />
                    <CardContent className="cardContent">
                      <Typography gutterBottom variant="h5">
                        {record.title}
                      </Typography>
                      <Typography>
                        Location: {record.location} <br></br>
                        Price: {record.price} <br></br>
                        Days: {record.days} <br></br>
                        About: {record.about} <br></br>
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