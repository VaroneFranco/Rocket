import React, { useState } from "react";
import s from "./CardError.module.css";
import { useHistory } from "react-router-dom";
import Loading from "../../Loading/Loading";

function CardError() {
  let history = useHistory();

  function back() {
    return history.push("/trueHome");
  }

  return (
    <div className={s.containerCardError}>
      <div className={s.titulo}>
        <h3>We can't find the requested user :(</h3>
      </div>

      <div className={s.containerCardErrorIMG}>
        <img
          src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-dibujos-animados-de-astronauta-espacial.png"
          alt="rocket"
        />
      </div>
      <div className={s.buttonCard}>
        <button onClick={() => back()}>BACK</button>
      </div>
    </div>
  );
}

export default CardError;
