
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { LandingPage, Register, NavBar } from './components/index'
import './App.css'
import Meet from './components/Meet/Meet'


const App = () => {
  return (
    <BrowserRouter>

      <div className='App'>
        <Route path='/' component={NavBar} />
        <Route path='/login' component={LandingPage} />
        <Route path='/signup' component={Register} />
        <Route path='/meet' component={Meet} />

      </div>
    </BrowserRouter>
  )
}

export default App;
