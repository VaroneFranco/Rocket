import React, { useEffect } from "react";
import style from "./QueryUser.module.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading/Loading.jsx";
import s from "./QueryUser.module.css"
import CardQueryUser from "./CardQueryUser/CardQueryUser";

function QueryUser() {

  const { _id } = useParams();

  useEffect(async () => {
    let user = await axios(`http://localhost:3001/searchProfileID/${_id}`);

    console.log(user.data);
  }, []);

  return (
    <div className={s.QueryUser}>
      <div className={s.mainContainer}>
        <CardQueryUser
        
        />
      </div>
    </div>
  );
}

export default QueryUser;
