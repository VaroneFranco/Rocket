import React, {useState, useEffect} from 'react'
import axios from "axios"
import s from "./TrueHome.module.css"
import MiniSilla from '../MiniSilla/MiniSilla'
import Pagination from '../Pagination/Pagination'

function TrueHome() {
    var [pag, setPag] = useState(0)
    var [users, setUsers] = useState([])

    useEffect(() => {
        var myUser = JSON.parse(localStorage.getItem("user"))
        
        axios("http://localhost:3001/getUsersByInstitution",{
            method: "post",
            data:{
                institution: myUser.institution
            }
        }).then(x => setUsers(x.data.filter(x => x._id !== myUser._id)))
        
    }, [])
    
    return (
        <div className={s.container}>
            <h3>Compañeros</h3>
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
