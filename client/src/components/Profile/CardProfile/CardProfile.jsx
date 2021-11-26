import axios from "axios";
import React, { useState } from "react";
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
  _id,
}) {

  const [field, setField] = useState({
    about: "",
    country: "",
  });
  
  
  function handleChange(e) {
    setField({
      ...field,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newChanges = {
      new_country: field.country,
      new_about: field.about,
      id: _id,
    };
 
    axios("localhost:3001/user/changes", { data: { newChanges } });
    setField({
      about: "",
      country: "",
    });
  }

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
              <form onSubmit={(e) => handleSubmit(e)}>
                <label> Change About </label>
                <input
                  type="text"
                  name="about"
                  value={field.about}
                  onChange={(e) => handleChange(e)}
                />

                <label> Change Country </label>
                <input
                  type="text"
                  name="country"
                  value={field.country}
                  onChange={(e) => handleChange(e)}
                />

                <button type="submit"> Apply Changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProfile;
