import React from 'react'
import s from "./CardQueryUser.module.css";
import Loading from "../../Loading/Loading";
import CardError from '../CardError/CardError';
function CardQueryUser({user}) {

    //set de botón status
    function setButtonStatus(status){
      if (status==="Online" || status==="Available") return "🟢";
      if (status==="Sleeping..." || status=== "Busy") return "🟡";
      if (status==="Offline") return "⚫";
    }
    var buttonStatus=setButtonStatus(user.status)

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
            <div className={s.foto_about}>{user.about}</div>
          </div>
          <div className={s.containerInfo}>
            <div className={s.info_nombre}>
              NAME: {user.name} SURNAME: {user.surname} LOCATION: {user.country}
              INSTITUTION: {user.institution}
              STATUS: {buttonStatus}{user.status}
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
