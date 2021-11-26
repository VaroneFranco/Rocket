import React from "react";
import style from "./Silla.module.css";
import axios from "axios";

function Silla({ img, name, surname, _id }) {
  const onChange = async (e) => {
    e.preventDefault();
    if (e.target.value === "like") {
      axios(`localhost:3001/increaseLike/${_id}`);
    }
    if (e.target.value === "reports"){
        axios(`localhost:3001/increaseReports/${_id}`)
    }
  };

  return (
    <div className={style.silla__container}>
      <img alt="silla" src={img} className={style.silla__img} />

      <h4 className={style.silla__name}>{name}</h4>
      <h4 className={style.silla__surname}>{surname}</h4>

      <select className={style.silla__select} onChange={(e) => onChange(e)}>
        <option value="">Like / Report</option>
        <option value="like" name="">
          Like 👍
        </option>
        <option value="reports">Report 🚫</option>
      </select>
    </div>
  );
}

export default Silla;
