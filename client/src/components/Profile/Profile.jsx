import React from "react";
import s from "./Profile.module.css";

function Profile() {
  return (
    <div className={s.mainContainer}>
      <div className={s.container}>
        <div className={s.formContainer}>
          <h2>MY STATISTICS 🌟</h2>
          <select name="ROCKETS" id="ROCKETS">
            <option value="null" className={s.fullname}>
              ROCKETS🚀
            </option>
            <option value="ROCKETS" className={s.fullname}></option>
          </select>
          <select>
            <option value="null" className={s.email}>
              REPORTS🚫
            </option>
            <option value="REPORTS" className={s.email}></option>
          </select>
          <select>
            <option value="ABSENCES" className={s.password}>
              ABSENCES❌
            </option>
            <option value="null" className={s.password}></option>
            <option className={s.password}></option>
          </select>
        </div>

        <div className={s.dataContainer}>
          <div className={s.form_group}>
            <label>
              <h4>Username</h4>
            </label>
          </div>
          <input className={s.fullname} type="text" />
          <div className={s.form_group}>
            <label>
              <h4>Mail</h4>
            </label>
          </div>
          <input className={s.email} type="email" />
          <div className={s.form_group}>
            <label>
              <h4>Discord</h4>
            </label>
          </div>
          <input className={s.password} type="password" />
          <div className={s.form_group}>
            <label>
              <h4>Description</h4>
            </label>
          </div>
          <input id="description" className={s.repeatPass} type="text" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
