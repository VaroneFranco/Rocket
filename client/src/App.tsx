import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import {LandingPage, Register, NavBar} from "./components/index";
import './App.css';

const App =()=> {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={NavBar}/>
        <Route path="/login" component={LandingPage}/>
        <Route path="/signup" component={Register}/>
      </div>
    </BrowserRouter>
  );
};

export default App;