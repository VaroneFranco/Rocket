import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import s from './TrueHome.module.css'
import MiniSilla from '../MiniSilla/MiniSilla'
import Pagination from '../Pagination/Pagination'

import { get } from 'http'

function TrueHome() {
  let history = useHistory()
  var [pag, setPag] = useState(0)
  var [users, setUsers] = useState([])

  useEffect(async () => {
    var myUser = JSON.parse(localStorage.getItem('user'))

    await axios('http://localhost:3001/getUsersByInstitution', {
      method: 'post',
      data: {
        institution: myUser.institution,
      },
    }).then((x) => setUsers(x.data.filter((x) => x._id !== myUser._id)))
    await axios.post('http://localhost:3001/asignTable')
    await axios('http://localhost:3001/isLog', {
      method: 'post',
      data: { token: localStorage.getItem('token') },
    }).then((res) => localStorage.setItem('user', JSON.stringify(res.data)))
  }, [])

  async function handleClick(e) {
    history.push('/home')
  }

  return (
    <div className={s.container}>
      <button onClick={(e) => handleClick()}>Ir a mi mesa</button>
      <h3>Compañeros</h3>
      <div className={s.usersContainer}>
        {users.slice(pag, parseInt(pag) + 9).map((x) => (
          <MiniSilla
            name={x.name}
            _id={x._id}
            img={x.img}
            institution={x.institution}
          />
        ))}
      </div>
      {users && <Pagination pag={pag} setPag={setPag} users={users} />}
    </div>
  )

}

export default TrueHome
