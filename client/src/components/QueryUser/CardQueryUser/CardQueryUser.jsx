import React, { useState } from "react";
import s from "./CardQueryUser.module.css";
import Loading from "../../Loading/Loading";
import CardError from "../CardError/CardError";
import foto from "../../../Images/01.png";

function CardQueryUser({ user }) {
  //set de botón status
  function setButtonStatus(status) {
    if (status === "Online" || status === "Available") return "🟢";
    if (status === "Sleeping..." || status === "Busy") return "🟡";
    if (status === "Offline") return "⚫";
  }
  var buttonStatus = setButtonStatus(user.status);

  const [loading, setLoading] = useState(true);

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }
  if (loading) {
    return (
      <div className={s.containerLoading}>
        <Loading />
      </div>
    );
  } else if (user.name) {
    //execute greet after 2000 milliseconds (2 seconds)
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
                src={foto}
                alt="cohete"
              />
            </div>
          </div>
        </div>
      </>
    );
  }

  return <CardError />;
}

export default CardQueryUser;
