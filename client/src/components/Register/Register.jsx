import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import s from './Register.module.css'
import axios from 'axios'
function Register() {
  let history = useHistory()
  var [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    repeatPass: '',
    country: '',
  })
  function handleChange(e) {
    const value = e.target.value
    setData({
      ...data,
      [e.target.name]: value,
    })
  }
  function handleSubmit(e) {
    e.preventDefault()
    if (data.password === data.repeatPass) {
      axios('http://localhost:3001/signup', {
        method: 'post',
        data: data,
      }).then(history.push('/trueHome'))
    }
  }

  return (
    <div className={s.mainContainer}>
      <div className={s.container}>
        <div className={s.formContainer}>
          <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <input
              className={s.fullname}
              type='text'
              placeholder='Full Name'
              required
              name='name'
              value={data.name}
              onChange={(e) => handleChange(e)}
            />
            <input
              className={s.email}
              type='email'
              placeholder='E-mail'
              required
              name='email'
              value={data.email}
              onChange={(e) => handleChange(e)}
            />
            <input
              className={s.password}
              type='password'
              placeholder='Password'
              required
              name='password'
              value={data.password}
              onChange={(e) => handleChange(e)}
            />
            <input
              className={s.repeatPass}
              type='password'
              placeholder='Repeat your Password'
              required
              name='repeatPass'
              value={data.repeatPass}
              onChange={(e) => handleChange(e)}
            />
            <input
              className={s.country}
              type='text'
              placeholder='Country'
              required
              name='country'
              value={data.country}
              onChange={(e) => handleChange(e)}
            />
            <button>SIGN UP</button>
          </form>
        </div>

        <div className={s.imgContainer}>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Creative-Tail-rocket.svg/768px-Creative-Tail-rocket.svg.png'
            alt='rocket'
            width='90%'
          />
          <p className={s.parrafo}>
            <p>
              The sky is not the limit <br />
              is just the beginning...
            </p>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
