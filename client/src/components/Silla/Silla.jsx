import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Silla.module.css";
import axios from "axios";

function Silla({ img, name, _id }) {
  //variables que sirven para deshabilitar botones like/report cuando se presionan
  const [likeOrReport, setlikeOrReport] = useState({ like: false, report: "" });

  const onChange = async (e) => {
    e.preventDefault();
    if (e.target.value === "like") {
      axios.put(`https://rocketproject2021.herokuapp.com/increaseLike/${_id}`);
      setlikeOrReport({ ...likeOrReport, like: true });
    }
    if (e.target.value === "reports") {
      let reportText = prompt(`Por que quieres reportar a ${name}?`);
      axios.post(
        `https://rocketproject2021.herokuapp.com/increaseReports/${_id}`,
        {
          reportText,
        }
      );
      setlikeOrReport({ ...likeOrReport, report: reportText });
    }
  };

  return (
    <div className={style.silla__container}>
      <Link to={`/query/user/${_id}`}>
        <img alt="silla" src={img} className={style.silla__img} />
      </Link>
      <h4 className={style.silla__name}>{name}</h4>

      <select className={style.silla__select} onChange={(e) => onChange(e)}>
        <option disabled selected value="">
          Like / Report
        </option>

        {likeOrReport.like === false ? (
          <option value="like" name="">
            Like{" "}
            <span role="img" aria-label="fingerup">
              👍
            </span>
          </option>
        ) : (
          <option disabled value="like" name="">
            Like{" "}
            <span role="img" aria-label="fingerup">
              👍
            </span>
          </option>
        )}

        {likeOrReport.report === "" ? (
          <option value="reports">
            Report{" "}
            <span role="img" aria-label="no">
              🚫
            </span>
          </option>
        ) : (
          <option disabled value="reports">
            Report{" "}
            <span role="img" aria-label="no">
              🚫
            </span>
          </option>
        )}
      </select>
    </div>
  );
}

export default Silla;
