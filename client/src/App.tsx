import React from 'react';

import { BrowserRouter, Route} from "react-router-dom";
import './App.css';
import {LandingPage, Register, NavBar, Home, Profile} from "./components/index"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={NavBar}/>
        <Route path="/home" component={Home}/>
        <Route path="/login" component={LandingPage}/>
        <Route path="/signup" component={Register}/>
        <Route path="/profile" component={Profile}/>
      </div>
    </BrowserRouter>
  )} 



export default App