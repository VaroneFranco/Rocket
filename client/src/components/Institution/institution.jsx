import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import GitHub from "../../Images/github.png";
import Facebook from "../../Images/Facebook.png";
import Google from "../../Images/google-logo-9808.png";
import './institution.css'
import axios from 'axios'

import {
  facebookProvider,
  githubProvider,
  googleProvider,
} from '../../config/authMethods'

import socialMediaAuth from '../../service/Auth' 

function InstitutionLogIn() {
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
    await axios('https://rocketproject2021.herokuapp.com/institution/signIn', {
      method: 'post',
      data: log,
    }).then(r => {
      if (r.data.token) {
        localStorage.setItem('token', r.data.token)
      } else {
        setLog({
          username: '',
          password: '',
        })
        alert('User or Password incorrect')
      }
    })
    await axios('https://rocketproject2021.herokuapp.com/institution/isLog', {
      method: 'post',
      data: { token: localStorage.getItem('token') },
    })
      .then((res) => localStorage.setItem('user', JSON.stringify(res.data)))
      .then(() => {
        if(JSON.parse(localStorage.getItem("user"))) return history.push("/")
        else return history.push('/')
      })
  }
  
  const handleOnClick = async (provider) => {
    const user = await socialMediaAuth(provider)  
    await axios('https://rocketproject2021.herokuapp.com/logMedia', {
      method: 'post',
      data: {
        name: user._delegate?.displayName,
        email: user._delegate.email,
        img: user._delegate.photoURL,
        status: "Online"
      },
    }).then(x => localStorage.setItem("token",x.data.token))
    await axios('https://rocketproject2021.herokuapp.com/isLog', {
      method: 'post',
      data: { token: localStorage.getItem('token') },
    })
      .then((res) => localStorage.setItem('user', JSON.stringify(res.data)))
      .then(async ()=>(
        await axios.post("https://rocketproject2021.herokuapp.com/user/changes", {new_status:"Online", id:JSON.parse(localStorage.getItem("user"))._id})
      ))
      .then(() => history.push('/trueHome'))
  }
 
  return (
    <div className="container">
      <div className="create-container">
        <div className="signIn">
          <h2>Sign In Institution</h2>
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
                  <h4 className="landingPage__button_text">LOG IN </h4>
                </button>
              </div>
            </form>
          </div>
          <div className="landingPage__login_image"></div>
          <h5>or login with</h5>

          <div className="landingPage__image">
            <button onClick={() => handleOnClick(facebookProvider)}>
              <img src={Facebook} alt="Facebook" />
            </button>
            <button onClick={() => handleOnClick(githubProvider)}>
              <img src={GitHub} alt="Github" />
            </button>
            <button onClick={() => handleOnClick(googleProvider)}>
              <img
                src={Google}
                alt="Google"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstitutionLogIn
