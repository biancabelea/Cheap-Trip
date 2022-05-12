import React, {useState, useEffect} from 'react';
import logo from './../Logo_Cheap_Trip.png';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, TextField} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import './../App.css';
import { Link, useNavigate} from 'react-router-dom'; 
import { CenterFocusStrong } from '@mui/icons-material';

const initialFieldValues = {
    username:'',
    password:'',
}

function Login (){
    let navigate = useNavigate();
    const [values, setValues] = useState(initialFieldValues);
    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    return (
    <>
        <div><CssBaseline />
        <AppBar position="relative" color="transparent">
          <Toolbar>
          <img src={logo} width="60 px" height="60 px"/>
          <Button variant="h6" padding="10px" onClick={() => navigate('/')}>
            Trips
          </Button>
          <Button variant="h6" padding="10px">
            Login
          </Button>
          </Toolbar>
        </AppBar>
        </div>
        <main>
          <div>
            <Container maxWidth="sm">
                <Typography variant="h5" align="center" color="textPrimary" padding="30px 20px 0px" gutterBottom>Login</Typography>
                <Typography variant="h6" align="center" color="textSecondary" padding="0px 20px 20px" paragraph>Log in so you can share your own experience</Typography>
            </Container>
          </div>
          <form>
          <Container maxWidth="xs" className="container">
              <Grid container>
                  <Grid item xs={12} padding="30px">
                    <TextField
                        variant="filled"
                        label="Username"
                        name="username"
                        value={values.username}
                        onChange={handleInputChange}
                    />
                    <br /><br />
                    <TextField
                        variant="filled"
                        label="Password"
                        name="password"
                        value={values.password}
                        onChange={handleInputChange}
                    />
                    <br/><br/><br/>
                    <div style={{display: 'flex', justifyContent: 'center', minWidth: '100%'}} >
                      <Button variant="contained" type="submit" padding="20px" color="primary" size="large">Login</Button>
                    </div>
                    <br/>
                    <div>
                    <label>You don't have an account? </label>
                    <Link to="/Register">Register</Link>
                    </div>
                  </Grid>
                  
              </Grid>
            </Container>   
          </form>
        </main>
    </>
    );
}
 
export default Login;