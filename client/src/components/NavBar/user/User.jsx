import React from 'react'
import { Link, useHistory } from 'react-router-dom'


import s from "./User.module.css"

function User() {
    let history = useHistory()
    const myUser = JSON.parse(localStorage.getItem("user"))
    return (
      <div className={s.container}>
        <div className={s.nombre}>
          <h4>{myUser.name.split(" ")[0]}</h4>
          <input type="checkbox" className={s.checkbox} id="check1" />
          <label for="check1" className={s.menu}>
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 12V14H0V12H20ZM20 6V8H0V6H20ZM20 0V2H0V0H20Z"
                fill="#4F4E4E"
              />
            </svg>
          </label>
          <div className={s.topPanel}>
            {myUser.moderator === true && (
              <h4 onClick={() => history.push("/admin/students")}>
                Admin Panel
              </h4>
            )}
            <h4 onClick={() => history.push("/profile")}>Mi Perfil</h4>
            <h4
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                history.push("/");
              }}
            >
              Cerrar Sesión
            </h4>

            <label for="check1" className={s.menu1}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22ZM11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20ZM11 12.4142L7.70711 15.7071L6.29289 14.2929L9.58579 11L6.29289 7.70711L7.70711 6.29289L11 9.58579L14.2929 6.29289L15.7071 7.70711L12.4142 11L15.7071 14.2929L14.2929 15.7071L11 12.4142Z"
                  fill="#4F4E4E"
                />
              </svg>
            </label>
          </div>
        </div>
        <div className={s.profile}>
          <Link to="/profile">
            <img src={myUser.img} alt="" width="50px" height="50px" />
          </Link>
        </div>
      </div>
    );
}

export default User
