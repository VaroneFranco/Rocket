import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './LandingPage.css'
import axios from 'axios'

import {
  facebookProvider,
  githubProvider,
  googleProvider,
} from "../../config/authMethods";

import socialMediaAuth from "../../service/Auth";

function LandingPage() {
  let history = useHistory()
  var [log, setLog] = useState({
    email: '',
    password: '',
  })
  function handleChange(e) {
    const value = e.target.value
    setLog({
      ...log,
      [e.target.name]: value,
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    await axios('http://localhost:3001/signin', {
      method: 'post',
      data: log,
    }).then((r) => {
      if (r.data.token) {
        console.log('login token: ', r.data.token)
        localStorage.setItem('token', r.data.token)
        return history.push('/')
      } else {
        setLog({
          username: '',
          password: '',
        })
        alert('User or Password incorrect')
      }
    })
    await axios('http://localhost:3001/isLog', {
      method: 'post',
      data: { token: localStorage.getItem('token') },
    })
      .then((res) => localStorage.setItem('user', JSON.stringify(res.data)))
      .then(() => history.push('/'))
  }

  const handleOnClick = async (provider) => {
    const user = await socialMediaAuth(provider);
    
    await axios('http://localhost:3001/logMedia', {
      method:'post',
      data: {
        name:user._delegate.displayName, 
        email:user._delegate.email, 
        img:user._delegate.photoURL}
    })
    .then(res => {
      console.log(res, "desde segundo axios")
      localStorage.setItem('token', res.data.token)
    })
    await axios('http://localhost:3001/isLog', {
      method: 'post',
      data: { token: localStorage.getItem('token') },
    })
      .then((res) => localStorage.setItem('user', JSON.stringify(res.data)))
      .then(() => history.push('/'))
  };

  return (
    <div className="container">
      <div className="create-container">
        <div className="signIn">
          <h2>Sign In</h2>
        </div>
        <div className="create-container-child">
          <div className="form">
            <form className="form-child" onSubmit={handleSubmit}>
              <div>
                <div className="form-group">
                  <label>
                    <h4>Email</h4>
                  </label>
                </div>
                <input
                  className="landingPage__input"
                  type="email"
                  name="email"
                  value={log.email}
                  onChange={(e) => handleChange(e)}
                  required
                  autoComplete="off"
                />
                <div className="form-group">
                  <label>
                    <h4>Password</h4>
                  </label>
                </div>
                <input
                  className="landingPage__input"
                  type="password"
                  name="password"
                  value={log.password}
                  onChange={(e) => handleChange(e)}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="landingPage__button">
                <button className="landingPage__button_login" type="submit">
                  <h4 className="landingPage__button_text">LOG IN</h4>
                </button>
              </div>
            </form>
          </div>
          <div className="landingPage__login_image"></div>
          <h5>or login with</h5>

          <div className="landingPage__image">
            <button onClick={() => handleOnClick(facebookProvider)}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                
              />
            </button>
            <button onClick={() => handleOnClick(githubProvider)}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="Github"
                
              />
            </button>
            <button onClick={() => handleOnClick(googleProvider)}>
              <img
                src="https://www.lasbrisashotels.com.mx/wp-content/uploads/2021/08/pngwing.com_.png"
                alt="Google"
             
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage
