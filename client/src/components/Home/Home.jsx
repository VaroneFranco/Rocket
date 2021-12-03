import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import Silla from '../Silla/Silla.jsx'
import Loading from '../Loading/Loading.jsx'
import axios from 'axios'
import RocketChat from '../RocketChat/Input/RocketChat.jsx'
import RocketMessages from '../RocketChat/Messages/RocketMessages'


const Home = () => {
  const [profiles, setProfiles] = useState([])
  useEffect(async () => {
    await axios('http://localhost:3001/isLog', {
      method: 'post',
      data: { token: localStorage.getItem('token') },
    }).then((res) => localStorage.setItem('user', JSON.stringify(res.data)))

    var userr = JSON.parse(localStorage.getItem('user'))
    let profiles = await axios
      .post('http://localhost:3001/filterUserByTable', {
        table: userr.table,
      })
      .then((r) => r.data)
    setProfiles(profiles)
  }, [])

  return (
    <div className={style.home__container}>
      <div className={style.home__mesa}>
        <div>
          <h2>My Team</h2>
        </div>
        <div className={style.home__mesa__child}>
          {profiles.length ? (
            profiles.map((user) => (
              <Silla name={user.name} img={user.img} _id={user._id} />
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <div className={style.home__chat}>
        <h4>CHAT</h4>
        <RocketMessages></RocketMessages>
        <RocketChat></RocketChat>
      </div>
    </div>
  )
}

export default Home
