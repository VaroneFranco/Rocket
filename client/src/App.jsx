import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import {
  LandingPage,
  Register,
  NavBar,
  Home,
  Profile,
  QueryUser,
  TrueHome,
  Students,
  SideBar
} from './components/index'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route path='/' component={NavBar} />
        <Route exact path='/' component={LandingPage} />
        <Route path='/home' component={Home} />
        <Route path='/trueHome' component={TrueHome} />
        <Route path='/signup' component={Register} />
        <Route path='/profile' component={Profile} />
        <Route path='/query/user/:_id' component={QueryUser} />
        <div className="adminContainer">
          <Route path='/admin' component={SideBar} />
          <Route exact path='/admin/students' component={Students} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
