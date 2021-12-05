
import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import Silla from '../Silla/Silla.jsx'
import Loading from '../Loading/Loading.jsx'
import axios from 'axios'
import RocketChat from '../RocketChat/Input/RocketChat.jsx'
import RocketMessages from '../RocketChat/Messages/RocketMessages'


const Home = () => {
  const [profiles, setProfiles] = useState([])
  const [params, setparams] = useState(null)
  useEffect(async () => {
    await axios("https://rocketproject2021.herokuapp.com/isLog", {
      method: "post",
      data: { token: localStorage.getItem("token") },
    }).then((res) => localStorage.setItem("user", JSON.stringify(res.data)));


    let userr = JSON.parse(localStorage.getItem("user"));
    setparams(userr)


    let profiles = await axios
      .post("https://rocketproject2021.herokuapp.com/filterUserByTable", {
        table: userr.table,
      })
      .then((r) => r.data);
    setProfiles(profiles);
  }, []);


  return (
    <div className={style.home__container}>
      <div className={style.home__mesa}>
        <div>
          <h2>My Team</h2>
        </div>
        <div className={style.home__mesa__child}>
          {profiles.length ? (
            profiles.map((user) => (
              <Silla name={user.name} img={user.img} _id={user._id} />
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <div className={style.home__chat}>
        <h4>CHAT</h4>
        { params && params?.name ? 
        <div>
        <RocketMessages table={`table${params.table}`}></RocketMessages>
        <RocketChat name={params.name} table={`table${params.table}`}></RocketChat>
        </div>
        :
        null
        }
        
      </div>
    </div>
  );
};

export default Home;
