import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import Silla from '../Silla/Silla.jsx'
import Loading from '../Loading/Loading.jsx'
import axios from 'axios'

// const arr = [
//   {
//     name: 'José',
//     surname: 'Perez',
//     img: 'https://ath2.unileverservices.com/wp-content/uploads/sites/5/2018/05/peinado-hacia-atraxxs-hombre4-300x300.jpg',
//     _id: "619daa90147c43cb6d0aa480"
//   },
//   {
//     name: 'Alberto',
//     surname: 'Gonzalez',
//     img: 'https://ath2.unileverservices.com/wp-content/uploads/sites/5/2018/05/peinado-hacia-atraxxs-hombre4-300x300.jpg',
//   },
//   {
//     name: 'Jorge',
//     surname: 'Martinez',
//     img: 'https://ath2.unileverservices.com/wp-content/uploads/sites/5/2018/05/peinado-hacia-atraxxs-hombre4-300x300.jpg',
//   },
//   {
//     name: 'Carlos',
//     surname: 'Costa',
//     img: 'https://ath2.unileverservices.com/wp-content/uploads/sites/5/2018/05/peinado-hacia-atraxxs-hombre4-300x300.jpg',
//   },
// ]

const Home = () => {
  const [profiles, setProfiles] = useState([])
  useEffect(async () => {
    await axios('http://localhost:3001/isLog', {
      method: 'post',
      data: { token: localStorage.getItem('token') },
    }).then((res) => localStorage.setItem('user', JSON.stringify(res.data)))

    console.log(JSON.parse(localStorage.getItem('user')))
    let userr = JSON.parse(localStorage.getItem('user'))
    let profiles = await axios
      .post('http://localhost:3001/filterUserByTable', {
        table: userr.table,
      })
      .then((r) => r.data)
    setProfiles(profiles)
    console.log(profiles)
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
      </div>
    </div>
  )
}

export default Home
