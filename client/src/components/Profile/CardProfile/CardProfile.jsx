import axios from "axios";
import React, { useState } from "react";
import s from "./CardProfile.module.css";
import {country_list} from '../../index'

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
  setObj,
  obj,
  status

}) {

  const [field, setField] = useState({
    about: null,
    img: null,
    country: null,
    status: null,
  });


  function handleChange(e) {
    setField({
      ...field,
      [e.target.name]: e.target.value,
    });
    setObj({
      ...obj,
      [e.target.name]: e.target.value
    })

  }

  function handleSubmit(e) {
    // e.preventDefault();
    const newChanges = {
      new_img: field.img,
      new_about: field.about,
      new_country: field.country,
      new_status: field.status,
      id: _id,
    };

 
    axios.put("http://localhost:3001/user/changes",  newChanges );

    setField({
      about: null,
      img: null,
      country: null,
      status: null,
    });
  }
  
  //set de botón status
  function setButtonStatus(status){
    if (status==="Online" || status==="Available") return "🟢";
    if (status==="Sleeping..." || status==="Busy") return "🟡";
    if (status==="Offline") return "⚫";
  }
  var buttonStatus=setButtonStatus(status)
  
  return (
    <>
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
              <h4>Status:</h4>
              <p>
                {buttonStatus}
                {status}
              </p>
              <h4>About {name} :</h4> <p>{about}.</p>
              <div className={s.containerUbicacion}>
                <span role="img" aria-label="place">
                  📍
                </span>
                <h5>{country}.</h5>
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
          <h4>Edit Info</h4>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label>Edit my Image</label>
              <select
                name="img"
                className={s.profile__btn1}
                onChange={(e) => handleChange(e)}
              >
                <option value="https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/foto-de-perfil-para-instagram-1024x538.png">
                  Avatar 1
                </option>
                <option value="https://www.movilzona.es/app/uploads-movilzona.es/2019/05/Foto-de-Perfil-en-WhatsApp.jpg?x=480&y=375&quality=40">
                  Avatar 2
                </option>
                <option value="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/08/fotos-perfil-whatsapp_16.jpg?itok=fl2H3Opv">
                  Avatar 3
                </option>
                <option value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmr_FKgCoFkoxhbzHlwhmLBpIKvkAepBMEjQ&usqp=CAU">
                  Avatar 4
                </option>
                <option value="https://previews.123rf.com/images/jemastock/jemastock1707/jemastock170713961/82562610-hombre-personaje-adulto-avatar-perfil-imagen-vector-ilustraci%C3%B3n.jpg">
                  Avatar 5
                </option>
              </select>
            </div>

            <label>Edit my About</label>
            <textarea
              name="about"
              maxlength="150"
              value={field.about}
              onChange={(e) => handleChange(e)}
            />

            <div>
              <label> Change Country </label>
              <select
                type="text"
                name="country"
                value={field.country}
                onChange={(e) => handleChange(e)}
              >
                <option disabled selected>
                  Select your Country...
                </option>
                {country_list.map((country) => {
                  return <option key={country}>{country}</option>;
                })}
              </select>
            </div>
            <div>
              <label> Change Status </label>
              <select
                type="text"
                name="status"
                value={field.status}
                onChange={(e) => handleChange(e)}
              >
                <option disabled selected>
                  Select your Status...
                </option>
                <option key={1}>Online</option>
                <option key={2}>Available</option>
                <option key={3}>Busy</option>
                <option key={4}>Sleeping...</option>
                <option key={5}>Offline</option>
              </select>
            </div>

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
