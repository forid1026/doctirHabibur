import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import TopHeader from './components/TopHeader/TopHeader';
import Nav from './components/Nav/Nav';
import Team from './components/Team/Team';
import Recognition from './components/Recognition/Recognition';
import Services from './components/Services/Services';
import Something from './components/Something/Something';
import Contact from './components/Contact/Contact';
import Copyright from './components/Copyright/Copyright';


function App() {
  return (
    <div>
  
    <TopHeader/>
      <Router>
      <Nav/>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/team">
            <Team/>
          </Route>
          <Route path="/recognition">
            <Recognition/>
          </Route>
          <Route path="/services">
            <Services/>
          </Route>
          <Route path="/something">
            <Something/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/*">
            <Home/>
          </Route>
        </Switch>
        </Router>
      <Copyright/>
      
        </div>
  );
}

export default App;
