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
                src="https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg"
                alt="foto de perfil"
              />
            </div>
            <div className={s.foto_nombre}>{user.name}</div>
            <div className={s.foto_about}>{user.about}</div>
          </div>
          <div className={s.containerInfo}>
            <div className={s.info_nombre}>
              NAME: {user.name} SURNAME: {user.surname} LOCATION: {user.country}
              INSTITUTION: {user.institution}
            </div>
            
            {user.enhableContact ? (
              <div className={s.info_nombre}>CONTACTS: {user.email}</div>
            ) : null }
            
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
