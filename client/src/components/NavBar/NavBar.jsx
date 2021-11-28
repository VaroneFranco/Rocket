import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./NavBar.module.css";
import logo from "../../logo.png";

const NavBar =()=> {

    // let location = useLocation(); // borré la importación, useLocation en react-router-dom

    return (
        <nav className={style.navbar__nav}>
            <NavLink to="/"><img alt="logo" src={logo} width="60%" className={style.navbar__logo}/></NavLink>
            <div className={style.navbar__div_buttons}>
                <NavLink to="/login"><button className={style.navbar__link}>SIGN IN</button></NavLink>
                <NavLink to="/signup"><button className={style.navbar__boton_violeta}>SIGN UP</button></NavLink>
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
    );
};

export default NavBar;
