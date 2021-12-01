import React, {useEffect} from 'react'
import { BrowserRouter, Route, useLocation } from 'react-router-dom'
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
  SideBar,
  TrueLandingPage,
  LandingNoLog
} from './components/index'

function App() {
  
  return (
    <BrowserRouter>
      <div className='App'>
        {/* <Route exact path="/" component={TrueLandingPage} /> */}
        <Route path='/' component={NavBar} /> 
        <Route exact path="/" component={LandingNoLog} />
        <Route path='/home' component={Home} />
        <Route path='/trueHome' component={TrueHome} />
        <Route path='/signin' component={LandingPage} />
        <Route path='/signup' component={Register} />
        <Route path='/profile' component={Profile} />
        <Route path='/query/user/:_id' component={QueryUser} />
        <Route path='/admin'> 
            <div className="adminContainer">
            <SideBar/>
            <Route exact path='/admin/students' component={Students} />
            </div>
          </Route>   
      </div>
    </BrowserRouter>
  )
}

export default App
