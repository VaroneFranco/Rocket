import React, {useState, useEffect} from 'react'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import style from './NavBar.module.css'
import logo from '../../logo.png'

const NavBar = () => {
  // let location = useLocation(); // borré la importación, useLocation en react-router-dom
  var myUser = JSON.parse(localStorage.getItem("user"))
  let history = useHistory()
  let location = useLocation()
  
 
  if(location.pathname!=="/") return ( 
    <nav className={style.navbar__nav}>
    
      {/* <NavLink to='/'>
        <img alt='logo' src={logo} width='60%' className={style.navbar__logo} />
      </NavLink> */}

      { myUser && (
        <NavLink to='/trueHome'>
        <img alt='logo' src={logo} width='60%' className={style.navbar__logo} />
      </NavLink>
      )}
      { !myUser && (
        <NavLink to='/'>
        <img alt='logo' src={logo} width='60%' className={style.navbar__logo} />
      </NavLink>
      )}

      <div className={style.navbar__div_buttons}>
        {myUser && (
          <div>
       
          <div>
            
              <button className={style.navbar__link} onClick={()=>history.push("/profile")}>
                MY PROFILE
              </button> 
              <button
              className={style.navbar__boton_violeta}
              onClick={() => {
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                history.push("/")
              }}
              >
              LOG OUT
              </button>
          </div>

          </div>

        )}
        {!myUser && (
          <div>
              
                <NavLink to='/signin'>
              <button className={style.navbar__link}>SIGN IN</button>
            </NavLink>
            <NavLink to='/signup'>
              <button className={style.navbar__boton_violeta}>SIGN UP</button>
            </NavLink>
            <NavLink to='/'>
              
            </NavLink>
          </div>
        )}
        {/* {

                    location.pathname === "/login" 
                    ? 
                    <div className={style.navbar__div_buttons}>
                        <NavLink to="/signin"><button className={style.navbar__link}>SIGN IN</button></NavLink>
                        <NavLink to="/signup"><button className={style.navbar__boton_violeta}>SIGN UP</button></NavLink>
                    </div>
                    :
                    <div className={style.navbar__div_buttons}>
                        <NavLink to="/signin"><button className={style.navbar__boton_violeta}>SIGN IN</button></NavLink>
                        <NavLink to="/signup"><button className={style.navbar__link}>SIGN UP</button></NavLink>
                    </div>
                } */}
        {/* ésto que está comentado arriba es para que los botones del nav cambien de clase dinamicamente segun la ruta. pero con nacho liam y seba concluimos que no daba, asi que los dejé estáticos */}
      </div>
    </nav>
  )
  else return(
    <div>
      
    </div>
  )
}

export default NavBar
