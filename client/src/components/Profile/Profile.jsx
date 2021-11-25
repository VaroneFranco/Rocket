import React from "react";
import s from "./Profile.module.css";

function Profile() {
  return (
    <div className={s.Profile}>
      <div className={s.mainContainer}>
        <div className={s.container}>
          <div className={s.conteinerInfo}>
            INFO
            <div className={s.containerFoto}>
              <div className={s.foto}>
                <img
                  src="https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg"
                  alt="foto" 
                />
              </div>
            </div>
            <div className={s.containerUbicacion}>
              <h2>MATIAS</h2>
            </div>

            <div className={s.containerAbout}>  </div>
          </div>
          <div className={s.conteinerEstadisticas}>
            <div className={s.estadisticas}>ESTADISTICAS</div>
            <div className={s.editInfo}>CAMBIOS DE INFO</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
