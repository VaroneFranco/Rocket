import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import s from "./TrueHome.module.css";
import MiniSilla from "../MiniSilla/MiniSilla";
import Pagination from "../Pagination/Pagination";

import { get } from "http";
import FilterBar from "../Filter/FilterBar";

function TrueHome() {
  let history = useHistory();
  var [pag, setPag] = useState(0);
  var [users, setUsers] = useState([]);
  var [users2, setUsers2] = useState([]);
  var [search, setSearch]=useState("")
  var [order, setOrder] = useState("default");
  var myUser = JSON.parse(localStorage.getItem("user"));
  const { ordenar } = require("../utils");
  async function getCompañeros() {
    let myUser = JSON.parse(localStorage.getItem("user"));
    if (myUser && myUser.institution) {
      await axios("http://localhost:3001/getUsersByInstitution", {
        method: "post",
        data: {
          institution: myUser.institution,
        },
      }).then((x) => setUsers(x.data.filter((x) => x._id !== myUser._id)));
    }
    await axios.post("http://localhost:3001/asignTable");
  }

  useEffect(() => {
    getCompañeros();
  }, [order === "default"]);

  if (order !== "default") ordenar(users, order);

  const handleChange=(e)=>{
    setSearch(e.target.value)
  }
  const handleSumbit = async (e) => {
    e.preventDefault();
    if (search) {
        setUsers2(users);
        let searchUsers = await axios(`http://localhost:3001/searchProfiles/${search}`).then(r=> r.data)
        setUsers(searchUsers);
        setSearch("")
    }
  }
  const handleDelete = (e)=>{
    e.preventDefault();
    if(users2){
      setUsers(users2)
    }
  }

  async function handleClick(e) {
    history.push("/home");
  }

  if (!myUser) return <div>no estas logueado pibe</div>;
  else if (!myUser.institution)
    return <div>No perteneces a ninguna institucion</div>;
  else if (myUser.institution)
    return (
      <div className={s.container}>
        <button onClick={(e) => handleClick()}>Ir a mi mesa</button>
        <h3>Compañeros</h3>
        <FilterBar setOrder={setOrder} />
        <form onSubmit={(e) => handleSumbit(e)}>
          <input
            placeholder="Buscar compañeros"
            onChange={(e) => handleChange(e)}
            value={search}
            type="text"
          />
          <button type="submit">
            BUSCAR
          </button>
          <button type="submit" onClick={handleDelete}>
            ELIMINAR BUSQUEDA
          </button>
        </form>
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
