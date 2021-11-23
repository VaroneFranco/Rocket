import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="container">
      <div className="create-container">
        <div className="signIn">
          <h2>Sign In</h2>
        </div>
        <div className="create-container-child">
          <div className="form">
            <form className="form-child">
              <div>
                <div className="form-group">
                  <label>
                    <h4>Username</h4>
                  </label>
                </div>
                <input
                  className="landingPage__input"
                  type="text"                
                />
                <div className="form-group">
                  <label>
                    <h4>Password</h4>
                  </label>
                </div>
                <input
                  className="landingPage__input"
                  type="password"
                />
              </div>
              <div className="landingPage__button">
                <button className="landingPage__button_login" type="submit">
                  <h4 className="landingPage__button_text">LOG IN</h4>
                </button>
              </div>
            </form>
          </div>
            <div className="landingPage__login_image"></div>
            <h5>Or Login With </h5>
            <div className="landingPage__image">
              <img
                src="https://www.lasbrisashotels.com.mx/wp-content/uploads/2021/08/pngwing.com_.png"
                alt="Google"
                width="80px"
                height="80px"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="Github"
                width="80px"
                height="80px"
              />
            </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
