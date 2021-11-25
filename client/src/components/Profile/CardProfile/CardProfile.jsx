import React from "react";
import s from "./CardProfile.module.css";

function CardProfile({ img, name, about, country, institution }) {
  return (
    <>
      <div className={s.container}>
        <div className={s.conteinerInfo}>
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
          <div className={s.containerAbout}><h3>{about}</h3></div>
        </div>
        <div className={s.conteinerEstadisticas}>
          <div className={s.estadisticas}>ESTADISTICAS</div>
          <div className={s.editInfo}>CAMBIOS DE INFO</div>
        </div>
      </div>
    </>
  );
}

export default CardProfile;
