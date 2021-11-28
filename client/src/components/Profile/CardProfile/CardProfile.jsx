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
    // e.preventDefault();
    const newChanges = {
      new_country: field.country,
      new_about: field.about,
      id: _id,
    };
 
    axios.put("http://localhost:3001/user/changes",  newChanges );
    setField({
      about: "",
      country: "",
    });
  }

  return (
    <>
      {/* <div className={s.container}>
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
      </div> */}

      <div className={s.profile__parent}>
        <div className={s.profile__div1}>
          <div className={s.containerFoto}>
            <img
              src={img}
              className={s.foto}
              alt="foto de perfil"
              width="80%"
              height="80%"
            />
          </div>
        </div>
        <div className={s.profile__div2}>
          <div className={s.containerAbout}>
            <span>
              <h4>About {name} :</h4> <p>{about}.</p>
              <div className={s.containerUbicacion}>
                📍<h5>{country}.</h5>
                <h5>Institution: {institution ? institution : "none"}.</h5>
              </div>
            </span>
          </div>
        </div>
        <div className={s.profile__div3}>
          <div className={s.profile__estadisticas}> 
            <h4>STATS</h4>
            <div className={s.profile__scores}>
              Rockets: {score}
              <br />
              Absence: {absence}
              <br />
              Reports: {reports}
            </div>
          </div>
        </div>
        <div className={s.profile__div4}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <h4>Edit Info</h4>
            <div>
              <label>Edit my Image</label>
              <button className={s.profile__btn1}>select</button>
            </div>

            <label>Edit my About</label>
            <textarea
              name="country"
              value={field.country}
              onChange={(e) => handleChange(e)}
            />

            <button type="submit" className={s.profile__btn2}>
              {" "}
              Apply Changes
            </button>
          
          </form>
        </div>
      </div>
    </>
  );
}

export default CardProfile;
