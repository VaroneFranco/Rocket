import React, { useState, useEffect } from "react";
import axios from "axios";
import s from "./Students.module.css";
import Student from "./Student/Student";

function Students() {
  const { ordenar } = require("../utils");
  var [users, setUsers] = useState([]);
  var [users2, setUsers2] = useState([]);
  var [pag, setPag] = useState({
    from: 0,
    to: 7,
  });
  var [orderBy, setOrderBy] = useState("a-z");

  async function shuffleTables() {
    await axios.post("http://localhost:3001/asignTable");
    console.log("mezclando");
  }
  async function getStudents() {
    var res = await axios("http://localhost:3001/getUsersByInstitution", {
      method: "post",
      data: {
        institution: JSON.parse(localStorage.getItem("user")).institution,
      },
    }).then((x) => x.data);
    setUsers(res);
    setUsers2(res);
  }
  useEffect(() => {
    getStudents();
  }, []);

  if (users) ordenar(users, orderBy);

  const handleChange = (e) => {
    if (e.target.value === "") {
      setUsers(users2);
    }
    setUsers(
      users2.filter((u) =>
        u.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  return (
    <div className={s.container}>
      <h2>Students Panel</h2>
      <button onClick={shuffleTables}>Shuffle Tables</button>
      <div className={s.filtros}>
        <div className={s.orderGroup}>
          <h6>Group</h6>
          <select value="FT 18-A">
            <option value="FT 18-A">FT 18-A</option>
            <option value="FT 20-B">FT 20-B</option>
          </select>
        </div>

        <form>
          <input
            placeholder="Find students..."
            onChange={(e) => handleChange(e)}
            className={s.formInput}
            type="text"
          />
          <button type="submit" className={s.btnSearch}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.1659 16.3718L25 23.206L23.206 25L16.3718 18.1659C14.6533 19.5017 12.4939 20.2972 10.1486 20.2972C4.54369 20.2972 0 15.7536 0 10.1486C0 4.54369 4.54369 0 10.1486 0C15.7536 0 20.2972 4.54369 20.2972 10.1486C20.2972 12.4939 19.5017 14.6533 18.1659 16.3718ZM10.1486 17.7601C14.3523 17.7601 17.7601 14.3523 17.7601 10.1486C17.7601 5.94493 14.3523 2.53716 10.1486 2.53716C5.94493 2.53716 2.53716 5.94493 2.53716 10.1486C2.53716 14.3523 5.94493 17.7601 10.1486 17.7601Z"
              />
            </svg>
          </button>
        </form>
        <div className={s.orderBy}>
          <h6>Order By</h6>
          <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="higher-rockets">+Rockets</option>
            <option value="higher-reports">+Reports</option>
          </select>
        </div>
      </div>
      <div className={s.studentsContainer}>
        {users &&
          users
            .slice(pag.from, pag.to)
            .map((x) => (
              <Student
                img={x.img}
                name={x.name}
                _id={x._id}
                score={x.score}
                reports={x.reports}
              />
            ))}
        <div className={s.pagContainer}>
          {
            <button
              disabled={pag.from > 0 ? false : true}
              onClick={() => setPag({ from: pag.from - 7, to: pag.to - 7 })}
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
            </button>
          }
          <div className={s.pagAct}>
            {pag.to / 7} - {Math.ceil(users.length / 7)}
          </div>
          {
            <button
              disabled={pag.to < users.length ? false : true}
              onClick={() => setPag({ from: pag.from + 7, to: pag.to + 7 })}
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

export default Students;
