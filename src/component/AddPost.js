import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, TextField} from '@mui/material'
import logo from './../Logo_Cheap_Trip.png';

function AddPost() {
    const [form, setForm] = useState({
        title: "",
        location: "",
        price: "",
        days: "",
        about: "",
    });
    const navigate = useNavigate();


    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        e.preventDefault();

        // When a post request is sent to the create url, we'll add a new record to the database.
        const newPost = { ...form };

        await fetch("http://localhost:5000/record/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        })
            .catch(error => {
                window.alert(error);
                return;
            });

        setForm({ title: "", location: "", price: "" , days: "", about: "",});
        navigate("/");
    }

    return (
        <div>
            <div><CssBaseline />
                <AppBar position="relative" color="transparent">
                    <Toolbar>
                        <img src={logo} width="60 px" height="60 px"/>
                        <Button variant="h6" padding="10px" onClick={() => navigate('/')}>
                            Trips
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>

            <h3>Create New Post</h3>
            <Container maxWidth="xs" className="form-group">
                <TextField
                    type="text"
                    className="form-control"
                    label="title"
                    id="title"
                    value={form.title}
                    onChange={(e) => updateForm({ title: e.target.value })}
                />
                <TextField
                    className="form-control"
                    label="location"
                    id="location"
                    value={form.location}
                    onChange={(e) => updateForm({ location: e.target.value })}
                />
                <TextField
                    className="form-control"
                    label="price"
                    id="price"
                    value={form.price}
                    onChange={(e) => updateForm({ price: e.target.value })}
                />
                <TextField
                    className="form-control"
                    label="days"
                    id="days"
                    value={form.days}
                    onChange={(e) => updateForm({ days: e.target.value })}
                />
                <TextField
                    className="form-control"
                    label="about"
                    id="about"
                    value={form.about}
                    onChange={(e) => updateForm({ about: e.target.value })}
                />
                <br></br>
                <Button
                    component="label"
                    variant="outlined" >
                    Upload Photo
                    <input
                        type="file"
                        hidden
                    />
                </Button>
                <br></br>
                <Button  onClick={onSubmit} variant="contained" type="submit" padding="20px" color="primary" size="large">Add Post</Button>
            </Container>
        </div>
    );
}

export default AddPost;
