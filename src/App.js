// import logo from './images/flowers.jpg';
import './App.css';
// import './Component/navbar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
  } from "react-router-dom";
import Home from './Component/home';
import AboutUs from './Component/aboutus';
import Contact from './Component/contact';
import Navbar from './Component/navbar';
// import { Component } from 'react';
function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
