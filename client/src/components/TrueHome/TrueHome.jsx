import React, {useState, useEffect} from 'react'
import axios from "axios"
import s from "./TrueHome.module.css"
import MiniSilla from '../MiniSilla/MiniSilla'
import Pagination from '../Pagination/Pagination'
import FilterBar from '../Filter/FilterBar'
import { useHistory } from 'react-router-dom'

function TrueHome() {
    let history = useHistory()
    const {ordenar}=require("../utils")
    var [pag, setPag] = useState(0)
    var [users, setUsers] = useState([])
    var [order, setOrder] = useState("default")
    useEffect(() => {
        var myUser = JSON.parse(localStorage.getItem("user"))
        
        axios("http://localhost:3001/getUsersByInstitution",{
            method: "post",
            data:{
                institution: myUser.institution
            }
        }).then(x => setUsers(x.data.filter(x => x._id !== myUser._id)))
        
    }, [order==="default"])

    if(order !== "default") ordenar(users, order)
    
    return (
        <div className={s.container}>
            <button onClick={()=>history.push("/profile")}>My Profile</button>
            <FilterBar setOrder={setOrder}/>
            <h3>Compañeros</h3>
            <h3>HENRY</h3>
            <div className={s.usersContainer}>
                {(users.slice(pag, (parseInt(pag)+9))).map(x => (
                    <MiniSilla name={x.name} _id={x._id} img={x.img} institution={x.institution}/>
                ))}
            </div>
            {users && (
                <Pagination pag={pag} setPag={setPag} users={users}/>
            )}
        </div>
    )
}

export default TrueHome
