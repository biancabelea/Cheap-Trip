import React, {useState, useEffect} from 'react';
import logo from './../Logo_Cheap_Trip.png';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, TextField} from '@mui/material'
import './../App.css';
import { Link, useNavigate} from 'react-router-dom';  

const initialFieldValues = {
    username:'',
    password:'',
}

function Register (){
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
          <Button variant="h6" padding="10px" onClick={() => navigate('/Login')}>
            Login
          </Button>
          </Toolbar>
        </AppBar>
        </div>
        <main style={{backgroundImage: 'url(https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1422&q=80)'}}>
          <div>
            <Container maxWidth="sm">
                <Typography variant="h5" align="center" color="textPrimary" padding="30px 20px 0px" gutterBottom>Register</Typography>
                <Typography variant="h6" align="center" color="textSecondary" padding="0px 20px 20px" paragraph>Register and be part of our community!</Typography>
            </Container>
          </div>
          <form>
          <Container maxWidth="xs" className="authForm">
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
                        type="password"
                        label="Password"
                        name="password"
                        value={values.password}
                        onChange={handleInputChange}
                    />
                    <br/><br/><br/>
                    <div style={{display: 'flex', justifyContent: 'center', minWidth: '100%'}} >
                      <Button variant="contained" type="submit" padding="20px" color="primary" size="large">Register</Button>
                    </div>
                    <br/>
                    <div>
                    <label>Do you already have an account? </label>
                    <Link to="/Login">Login</Link>
                    </div>
                  </Grid>
                  
              </Grid>
            </Container>   
          </form>
        </main>
    </>
    );
}
 
export default Register;