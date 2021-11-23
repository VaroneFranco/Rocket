import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { LandingPage, NavBar } from "./components/index";
import './App.css';

function App() {
  return (
    // <BrowserRouter>
      <div className="App">
        {/* <Switch>
         <Route path = "/" component = { NavBar } />
        </Switch> */}
      </div>
    // </BrowserRouter> 
  );
};
// antes de pushear, retornar SOLO el Div vacío, borrar rutas.
export default App;
