import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import s from "./TrueHome.module.css";
import MiniSilla from "../MiniSilla/MiniSilla";
import Pagination from "../Pagination/Pagination";
import TrueLandingPage from "../TrueLandingPage/TrueLandingPage";

import { get } from "http";
import FilterBar from "../Filter/FilterBar";

function TrueHome() {
  const history = useHistory();
  const [pag, setPag] = useState(0);
  const [users, setUsers] = useState([]);
  const [users2, setUsers2] = useState([]);   
  const [order, setOrder] = useState("default");
  const myUser = JSON.parse(localStorage.getItem("user"));
  const { ordenar } = require("../utils");

  async function getCompañeros() {
    let myUser = JSON.parse(localStorage.getItem("user"));
    if (myUser && myUser.institution) {
      let data = await axios.post("http://localhost:3001/getUsersByInstitution", myUser.institution)
      .then((x) => (x.data.filter((x) => x._id !== myUser._id)));
      setUsers(data)
      setUsers2(data)
    }

    await axios.post("http://localhost:3001/asignTable");
  }

  useEffect(() => {
    getCompañeros();
  }, [order === "default"]);

  if (order !== "default") ordenar(users, order);

  const handleChange= async (e)=>{
    console.log(e.target.value)
    if(e.target.value===""){
      setUsers(users2)
    }
    else{
      let searchUsers = await axios(`http://localhost:3001/searchProfiles/${e.target.value}`).then(r=> r.data)
      setUsers(searchUsers)
    }
  }

  async function handleClick(e) {
    history.push("/home");
  }

  if (!myUser) return <TrueLandingPage />;
  else if (!myUser.institution)
    return <div>No perteneces a ninguna institucion</div>;
  else if (myUser.institution)
    return (
      <div className={s.container}>
       {/*  <h2>Classmates</h2> */}
        <FilterBar setOrder={setOrder} />
        <form>
   
          <input
            placeholder="🔎 Find mates ..."
            onChange={(e) => handleChange(e)}
            className={s.landingPage__input}
            type="text"
          />
          
        </form>
        <button className={s.truehome__boton_violeta} onClick={(e) => handleClick()}>Go to my work bench</button>
        <div className={s.usersContainer}>
          {users && users.slice(pag, parseInt(pag) + 9).map((x) => (
            <MiniSilla
              name={x.name}
              _id={x._id}
              img={x.img}
              institution={x.institution}
            />
          ))}
          
        </div>
        {users && <Pagination pag={pag} setPag={setPag} users={users} />}
      </div>
    );
}

export default TrueHome;
