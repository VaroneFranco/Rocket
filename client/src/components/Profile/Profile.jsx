import React, { useState, useEffect } from "react";
import axios from "axios";
import GoBackButton from "../goBackButton/GoBackButton";
import { country_list } from '../index';
import avatars from "../../avatars/avatarsarr";
import "./Profile.css";
import avatarPorDefaultAlien from "../../avatars/avatar21-alien.png";

const Profile =()=> { 

    const [obj, setObj] = useState({});

    const [field, setField] = useState({
      about: null,
      img: null,
      country: null,
      status: null
    });

    let id = JSON.parse(localStorage.getItem('user'))._id
  
    useEffect(() => {
    let profile = axios(`https://rocketproject2021.herokuapp.com/searchProfileID/${id}`).then(r=> setObj(r.data))
  
    },[])
    // const [checket, setChecket] = useState(obj?.enhableContact);

    async function showContact() {  
        if (obj.enhableContact === true) {
        // setChecket(false);
            obj.setObj({...obj, enhableContact: false})
            await axios.put("https://rocketproject2021.herokuapp.com/user/changes", { new_enhableContact: false, id: obj._id });
        } else if (obj.enhableContact === false) {
        // setChecket(true);
            obj.setObj({...obj, enhableContact: true})
            await axios.put("https://rocketproject2021.herokuapp.com/user/changes",{ new_enhableContact: true, id: obj._id });
        };
    };

    function handleChange(e) {
      setField({
        ...field,
        [e.target.name]: e.target.value,
      });
      setObj({
        ...obj,
        [e.target.name]: e.target.value
      })
    };

    async function handleSubmit(e) {
    e.preventDefault();
    const newChanges = {
        new_img: field.img,
        new_about: field.about,
        new_country: field.country,
        new_status: field.status,
        id: obj._id
        }

       await axios.post("https://rocketproject2021.herokuapp.com/user/changes", newChanges);

        setField({
            about: null,
            img: null,
            country: null,
            status: null
        });
    };

    function setButtonStatus(status){
        if (status==="Online" || status==="Available") return "🟢";
        if (status==="Busy") return "🟡";
        if (status==="Sleeping") return "🔵";
        if (status==="Offline") return "⚫";
    };
    let buttonStatus=setButtonStatus(obj.status)
      
    return (
      <div className="profile-supercontainer">
       <GoBackButton/>
        <div className="container profile-container">
          <div className="main-body">
            <div className="row gutters-sm"> 
              <div className="col-md-4 mb-3" style={{width: "600px"}}>
                <div className="card" style={{minWidth: "300px"}}>
                  <div className="card-body profile-card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src={obj.img ? obj.img : avatarPorDefaultAlien}
                        alt="avatar"
                        className="rounded-circle"
                        width="150"/>
                      <div className="mt-3">
                        <h4>{obj.name ? obj.name : "User Name"}</h4>
                        <p className="text-secondary mb-1">
                            {buttonStatus} {obj.status}
                        </p>
                        <p className="text-muted font-size-sm">
                            {obj.country ? obj.country : "Unspecified country"}
                        </p>
                        <p className="text-muted font-size-sm">
                            {obj.institution ? obj.institution : "Unspecified institution"}
                        </p>
                        <hr />
                        <h6>About</h6>
                        <p className="text-muted font-size-sm">
                          { obj.about ? obj.about : 
                          "Introduce yourself... c'mon! tell everybody who you're, don't be shy" }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-md-8">
                <div className="card mb-3">
                  <div className="card-body">
                  <form onSubmit={(e) => handleSubmit(e)}>

                  <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Country</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <select 
                        className="profile-select"
                        type="text"
                        name="country" 
                        value={field.country} 
                        onChange={(e) => handleChange(e)}>
                        <option disabled selected>Select your Country...</option>
                        {country_list.map((country) => {
                            return <option key={country}>{country}</option>;
                        })}
                        </select>
                      </div>
                    </div>
<hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Avatar</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <select
                        className="profile-select"
                        name="img"
                        onChange={(e) => handleChange(e)}>
                          <option disabled selected>Select your Avatar...</option>
                        {avatars.map((avatar, index) => (
                          <option key={index} value={avatar}>{index + 1}</option>
                        ))}
                        </select>
                      </div>
                    </div>
<hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Status</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <select 
                         className="profile-select"
                         type="text"
                         name="status"
                         value={field.status}
                         onChange={(e) => handleChange(e)}>
                          <option disabled selected>Select your Status...</option>
                          <option key={1}>Online</option>
                          <option key={2}>Busy</option>
                          <option key={3}>Sleeping</option>
                          <option key={4}>Offline</option>
                        </select>
                      </div>
                    </div>
<hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Share Contacts</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                      <div className="form-check form-switch"> 
                      { obj.enhableContact
                      ?
                      (<input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      onChange={() => showContact()}
                      checked="true"
                      /> ) 
                      : 
                      (<input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      onChange={() => showContact()}
                      checked="false"
                      /> ) }
                      </div>
                      </div>
                    </div>
<hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">About</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <textarea 
                        placeholder=". . ."
                        className="profile-input"
                        name="about"
                        value={field.about}
                        style={{width: "92%"}}
                        onChange={(e) => handleChange(e)} 
                        />
                      </div>
                    </div>
<hr />
                    <div className="row">
                      <div className="col-sm-12">
                        <button type="submit" className='profile__button_submit'>
                            {" "}
                            Apply Changes
                        </button>
                      </div>
                    </div>
                  </form>
                  </div>
                </div>
                
                <div className="row gutters-sm">
                  <div className="col-sm-12 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h6 className="d-flex align-items-center mb-3">
                          <i className="material-icons text-info mr-2" />
                          MY STATS
                        </h6>
                        <small>🚀  Rockets</small>
                        <div className="progress mb-3" 
                        height="5px">
                          <div
                            className="profile-stats-progress"
                            role="progressbar"
                            style={{width: obj.score ? (obj.score + "%") : ("1%")}}
                          ></div>
                        </div>
                        <small>❌  Abscences</small>
                        <div className="progress mb-3" 
                        height="5px">
                          <div
                            className="profile-stats-progress"
                            role="progressbar"
                            style={{width: obj.absence ? (obj.absence + "%") : ("1%")}}
                          ></div>
                        </div>
                        <small>🚫  Reports</small>
                        <div className="progress mb-3" 
                        height="5px">
                          <div
                            className="profile-stats-progress"
                            role="progressbar"
                            style={{width: obj.reports ? (obj.reports + "%") : ("1%")}}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Profile;
