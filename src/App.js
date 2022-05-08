import React, {Component} from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import HomePage from "./component/HomePage";
import ViewPost from "./component/ViewPost";
import Login from "./component/Login";
import Register from "./component/Register";
import MyPosts from "./component/MyPosts";
import AddPost from "./component/AddPost";

class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
           <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/ViewPost" element={<ViewPost/>}/>
            <Route exact path="/Login" element={<Login/>}/>
            <Route exact path="/Register" element={<Register/>}/>
            <Route exact path="/MyPosts" element={<MyPosts/>}/>
            <Route exact path="/AddPost" element={<AddPost/>}/>
          </Routes>
           </div>
       </Router>
   );
  }
}

export default App;
