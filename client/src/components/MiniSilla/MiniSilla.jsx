import React from 'react'
import s from "./MiniSilla.module.css"
import {useHistory} from "react-router-dom"
function MiniSilla({ img, name,  _id, institution }) {
    let history = useHistory()
    return (
        <div className={s.cardContainer} onClick={()=>history.push("/query/user/"+_id)}>
            
            <div className={s.img}>
                <img src={img} alt="" width="60px" height="60px"/>
                <h6>{institution}</h6>
            </div>
            <h5>{name}</h5>
            
        </div>
    )
}

export default MiniSilla
