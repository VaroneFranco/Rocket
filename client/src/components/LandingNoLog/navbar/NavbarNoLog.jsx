import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from "react-scroll"
import s from "./NavbarNoLog.module.css"
function NavbarNoLog(props) {
    
    let history = useHistory()
    var[selected,setSelected] = useState("first")
    
    return (
        <div className={props.isScrolling > 20 ? s.scrolling : s.navbar}>
                {props.isScrolling < 20 && (
                    <img src={require("../../../logo.png")} alt="" width="90px"/>
                )}
                {props.isScrolling > 20 && (
                    <img src={require("../../../logoBlanco.png")} alt="" width="90px" onClick={()=>{
                        setSelected("first")
                        window.scrollTo({top:0, left:0, behavior:'smooth'})
                    }}/>
                )}

                
                <div className={s.links}> 
                        <Link  className={selected === "first" ? s.linkSelected : s.link} onClick={()=>setSelected("first")} to="first" smooth={true} duration={1000} offset={-63}>Nuestro Impacto</Link>
                        <Link  className={selected === "third" ? s.linkSelected : s.link} onClick={()=>setSelected("third")} to="third" smooth={true} duration={1000} offset={-63}>Manifiesto</Link>
                        <h4 className={selected === "team" ? s.linkSelected : s.link} onClick={()=>{
                            setSelected("team")
                            window.scrollTo({top: 3000, left:0, behavior:'smooth'})
                        }}>Team</h4>
                </div>
                <div className={s.buttons}>
                    <button className={s.institution} style={props.isScrolling > 20 ? {"color":"white"}:null}>
                        INSTITUCION
                    </button>
                    <button  className={s.student}
                        onClick={()=>{
                        if(localStorage.getItem("token")) return history.push("/trueHome")
                        else return history.push("/signin")
                    }}>ALUMNOS</button>
                </div>
              
        </div>
    )
}

export default NavbarNoLog
