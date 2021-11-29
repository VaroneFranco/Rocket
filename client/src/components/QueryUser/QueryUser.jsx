import React, { useEffect, useState } from "react";
import style from "./QueryUser.module.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import s from "./QueryUser.module.css"
import CardQueryUser from "./CardQueryUser/CardQueryUser";
import GoBackButton from "../goBackButton/GoBackButton";

function QueryUser() {

  const { _id } = useParams();
  console.log(_id);
  var [user, setUser] = useState({});

  useEffect (  () => {
        axios(`http://localhost:3001/searchProfileID/${_id}`).then(res => setUser(res.data));

    console.log(user);
  }, [] );

  return (

    <div className={s.QueryUser}>
      <GoBackButton/>
      <div className={s.mainContainer}>
       <CardQueryUser user={user} /> 
      </div>
    </div>
  );
}

export default QueryUser;

