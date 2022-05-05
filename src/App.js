import logo from './Logo_Cheap_Trip.png';
import './App.css';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button} from '@mui/material'
import { PhotoCamera } from '@mui/icons-material';

const cards=[1,2,3,4,5,6,7,8,9]

function App() {
  return (
    <>
      <CssBaseline />
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
          <Typography variant="h3" align="center" color="textPrimary" padding="20px" gutterBottom>All trips</Typography>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>Here you can find a lovely community of travelers who like to organize their trips on a budget. You can upload your own experiences and help us expand our community.</Typography>
        
        </Container>
        </div>
        <div>
          <Container maxWidth="md" className='container'>
            <Grid container spacing={4} className="cardGrid">
              {cards.map(() => (
                <Grid item>
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
                      This is a media card. Here you will se the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" marginTop="50px" color="primary">View</Button>
                  </CardActions>
                </Card>
              </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
