import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import {LandingPage, Register, NavBar, Home} from "./components/index";
import './App.css';

const App =()=> {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={NavBar}/>
        <Route path="/login" component={LandingPage}/>
        <Route path="/signup" component={Register}/>
        <Route path="/home" component={Home}/>
      </div>
    </BrowserRouter>
  );
};

export default App;