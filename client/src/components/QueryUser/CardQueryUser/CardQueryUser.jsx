import React from 'react'
import s from "./CardQueryUser.module.css";
import Loading from "../../Loading/Loading";
import CardError from '../CardError/CardError';
function CardQueryUser({user}) {
 if (user.name) {
    return (
      <>
        <div className={s.containerQuery}>
          <div className={s.containerFoto}>
            <div className={s.foto}>
              <img
                src={user.img}
                alt="foto de perfil"
              />
            </div>
            <div className={s.foto_nombre}>{user.name}</div>
            <div className={s.foto_about}>{user.country}</div>
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
  <CardError />
 )
}

export default CardQueryUser
