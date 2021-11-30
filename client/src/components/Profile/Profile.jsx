import s from "./Profile.module.css";
import CardProfile from "./CardProfile/CardProfile";
import axios from "axios";
import React, { useState, useEffect } from "react";
import GoBackButton from "../goBackButton/GoBackButton";

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
      <GoBackButton/>
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
          setObj={setObj}
          obj={obj}
          status={obj?.status}

        />
      </div>
      <label>Share contacts</label>
      {obj.enhableContact ? (
        <button onClick={() => showContact()}>Hide contact</button>
      ) : (
        <button onClick={() => showContact()}>Show contact</button>
      )}
    </div>
  );
};

export default Profile;
