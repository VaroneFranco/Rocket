import React from 'react'
import s from "./CardQueryUser.module.css";
import Loading from "../../Loading/Loading";
function CardQueryUser({user}) {
 if (user) {
    return (
      <>
        <div className={s.containerQuery}>
          <div className={s.containerFoto}>
            <div className={s.foto}>
              <img
                src="https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg"
                alt="foto de perfil"
              />
            </div>
            <div className={s.foto_nombre}>{user.name}</div>
            <div className={s.foto_about}>about</div>
          </div>
          <div className={s.containerInfo}>
            <div className={s.info_nombre}>
              NOMBRE APELLIDO UBICACION ADMIN/ESTUDENT
            </div>
            <div className={s.info_nombre}>
              NOMBRE APELLIDO UBICACION ADMIN/ESTUDENT
            </div>
          </div>
        </div>
      </>
    );
 }
 return (
  <Loading />
 )
}

export default CardQueryUser
