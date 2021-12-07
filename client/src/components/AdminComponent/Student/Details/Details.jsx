import React, {useState} from 'react'
import Actions from './Actions'
import Reports from './Reports'
import s from "./Details.module.css"
function Details({user, setDetailsOpen}) {
    var [selected, setSelected] = useState("reports")
    return (
        <div className={s.container}>
            <div className={s.subcontainer}>
                 <h3>{user.name}</h3>
                 <h2 onClick={()=>setDetailsOpen(false)}>X</h2>
                 <div className={s.options}>
                    <h4 className={selected === "reports" ? s.selected : s.option} onClick={()=>setSelected("reports")}>Reports</h4>
                    <h4 className={selected === "actions" ? s.selected : s.option} onClick={()=>setSelected("actions")}>Actions</h4>
                 </div>
                 {selected === "reports" && <Reports reports={user.reports}/>}
                {selected === "actions" && <Actions id={user._id}/> }
            </div>     
        </div>
    )
}

export default Details
