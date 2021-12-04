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
  /* const [pag, setPag] = useState(0); */
  var [pag, setPag] = useState({
    from: 0,
    to: 9,
  });
  const [users, setUsers] = useState([]);
  const [users2, setUsers2] = useState([]);
  const [order, setOrder] = useState("default");
  const myUser = JSON.parse(localStorage.getItem("user"));
  const { ordenar } = require("../utils");

  async function getCompañeros() {
    let myUser = JSON.parse(localStorage.getItem("user"));
    if (myUser && myUser.institution) {
    let data = await axios
        .post("https://rocketproject2021.herokuapp.com/getUsersByInstitution", myUser.institution)
        .then((x) => x.data.filter((x) => x._id !== myUser._id));
      setUsers(data);
      setUsers2(data);
    }
  }

  useEffect(() => {
    getCompañeros();
  }, [order === "default"]);

  if (order !== "default") ordenar(users, order);

  const handleChange = async (e) => {
    if (e.target.value === "") {
      setUsers(users2);
    }
    setUsers(
      users2.filter((u) =>
        u.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setPag(0)
  };

  async function handleClick(e) {
    history.push("/home");
  }
 
  if (!myUser) return <TrueLandingPage />;
  
  else if (!myUser.institution)
    return <div>No course or institution were found for your profile...</div>;
  else if (myUser.institution)
    return (
      <div className={s.container}>

        <h2>Your course: {myUser.institution}</h2>

        <FilterBar setOrder={setOrder} />
        <form>
          <input
            placeholder="🔎 Find mates ..."
            onChange={(e) => handleChange(e)}
            className={s.landingPage__input}
            type="text"
          />
        </form>
        <button
          className={s.truehome__boton_violeta}
          onClick={(e) => handleClick()}
        >
          Go to my work bench
        </button>
        <div className={s.usersContainer}>
          {users &&
            users
              .slice(pag.from, pag.to)
              .map((x) => (
                <MiniSilla
                  name={x.name}
                  _id={x._id}
                  img={x.img}
                  institution={x.institution}
                />
              ))}
        </div>
          <div className={s.containerPagination}>
            {/* {users && <Pagination pag={pag} setPag={setPag} users={users} />} */}
            <div className={s.pagContainer}>
            {
              <button
                disabled={pag.from > 0 ? false : true}
                onClick={() => setPag({ from: pag.from - 9, to: pag.to - 9 })}
              >
                <svg
                  width="9"
                  height="11"
                  viewBox="0 0 9 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.70679 5.73303L8.176 10.2896L7.1156 11.173L0.585999 5.73303L7.1156 0.29303L8.176 1.17648L2.70679 5.73303Z"
                    fill="#4F4E4E"
                  />
                </svg>
                Anterior
              </button>
            }
            <div className={s.pagAct}>
              <h4 className={s.currentPage}>{pag.to / 9}</h4> de {Math.ceil(users.length / 9)}
            </div>
            {
              <button
                disabled={pag.to < users.length ? false : true}
                onClick={() => setPag({ from: pag.from + 9, to: pag.to + 9 })}
              >
                Siguiente
                <svg
                  width="9"
                  height="11"
                  viewBox="0 0 9 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.9395 5.49998L0.469749 0.941855L1.53025 0.0581055L8.0605 5.49998L1.53025 10.9419L0.469749 10.0581L5.9395 5.49998Z"
                    fill="#4F4E4E"
                  />
                </svg>
              </button>
            }
          </div>
        </div>
      </div>
    );
}

export default TrueHome;
