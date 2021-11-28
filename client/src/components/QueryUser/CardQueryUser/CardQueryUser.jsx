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
              <img src={user.img} alt="foto de perfil" />
            </div>
            <div className={s.foto_nombre}>{user.name}</div>
            <div className={s.foto_about}>{user.about}</div>
          </div>
          <div className={s.containerInfo}>
            <div className={s.info_nombre}>
              <div className={s.info_nombreV1}>
                <h4>NAME:</h4> <h5>{user.name}</h5> <h4>INSTITUTION:</h4>{" "}
                <h5>{user.institution}</h5>
                <h4>LOCATION:</h4> <h5>{user.country} </h5>
              </div>
              <div className={s.info_nombreV2}>
                <h4>STATUS:</h4> <h5>{user.status}</h5>
                {user.enhableContact ? (
                  <div className={s.info_nombre}>
                    {" "}
                    <h4>CONTACTS:</h4> <h5>{user.email}</h5>{" "}
                  </div>
                ) : null}
              </div>
            </div>
            <div className={s.score}>
              <h3>ROCKETS: </h3> <h4>{user.score}</h4>
              <img
                src="https://sgame.dit.upm.es/pictures/15651.png?1617669737/"
                alt="cohete"
              />
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
