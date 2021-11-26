import React from "react";
import s from "./CardProfile.module.css";

function CardProfile({
  img,
  name,
  about,
  country,
  institution,
  score,
  absence,
  reports,
}) {
  return (
    <>
      <div className={s.container}>
        <div className={s.containerInfo}>
          INFO
          <div className={s.containerFoto}>
            <div className={s.foto}>
              <img src={img} alt="foto de perfil" />
            </div>
          </div>
          <div className={s.containerUbicacion}>
            <h2>{name}</h2>
            <h3> 📍 {country}</h3>
            <h3>{institution}</h3>
          </div>
          <div className={s.containerAbout}>
            <span>
              {" "}
              <p>{about}</p>
            </span>
          </div>
        </div>
        <div className={s.containerEstadisticas}>
          <div className={s.estadisticas}>
            STATS
            <div className={s.scores}>
              Rockets: {score}
              <br />
              Absence: {absence}
              <br />
              Reports: {reports}
            </div>
          </div>
          <div className={s.containerEditInfo}>
            CAMBIOS DE INFO
            <div className={s.EditInfo}>


            </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default CardProfile;
