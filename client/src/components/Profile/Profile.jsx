import s from "./Profile.module.css";
import CardProfile from "./CardProfile/CardProfile";
import axios from "axios";
import React, { useState, useEffect } from "react";

// const obj = [
//   {
//     name: "Sabrina The Cat",
//     password: "U2FsdGVkX1+VOiDyfP83nDEMI9/CewBTEVFz8nA4S0k=",
//     moderator: false,
//     email: "sabrina_la_bicha@mongoose.com",
//     country: "Guantanamera",
//     institution: "Henry",
//     score: 5,
//     absence: 10,
//     reports: 110,
//     active: false,
//     __v: 0,
//     img: "https://www.itsmiparis.com/wp-content/themes/nextline_v4/images/itsmi_student_life.jpg",
//     table: 4,
//     meetLink: "https://meet.jit.si/Rocket-Henry-WebFT-18-4",
//     about:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
//     _id: "619daa90147c43cb6d0aa480",
//     enableContact: true,
//   },
// ];

const Profile = () => {
  const [obj, setObj] = useState({})
  let id = JSON.parse(localStorage.getItem('user'))._id
  
  useEffect(()=>{
    let profile = axios(`http://localhost:3001/searchProfileID/${id}`).then(r=> setObj(r.data))
    
  },[])
  // const [checket, setChecket] = useState(obj?.enhableContact);

  console.log(obj)

  async function showContact() {  
    if (obj.enhableContact === true) {
      // setChecket(false);
      setObj({...obj, enhableContact: false})
      await axios.put("http://localhost:3001/user/changes", { new_enhableContact: false, id: obj._id });
    } else if (obj.enhableContact === false) {
      // setChecket(true);
      setObj({...obj, enhableContact: true})
      await axios.put("http://localhost:3001/user/changes",{ new_enhableContact: true, id: obj._id });
    }
  }

  return (
    <div className={s.Profile}>
      <div className={s.mainContainer}>
        <CardProfile
          name={obj?.name}
          img={obj?.img}
          country={obj?.country}
          institution={obj?.institution}
          about={obj?.about}
          score={obj?.score}
          absence={obj?.absence}
          reports={obj?.reports}
          _id={obj?._id}
        />
      </div>
      <label>Ocultar Contactos</label>
      {obj.enhableContact ? (
        <button onClick={() => showContact()}>Hide contact</button>
      ) : (
        <button onClick={() => showContact()}>Show contact</button>
      )}
    </div>
  );
};

export default Profile;
