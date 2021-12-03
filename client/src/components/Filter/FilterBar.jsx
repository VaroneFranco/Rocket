import React,{ useState } from 'react'
import { useHistory, useLocation } from "react-router-dom"
import s from "./FilterBar.module.css"



function FilterBar({setOrder}) {
    
    let history = useHistory()
    var [orderBy, setOrderBy] = useState("default")
    
    function handleOrder(e){
        setOrder(e.target.value)
        setOrderBy(e.target.value)
    }
    
    return(
        <div className={s.container}>
            <input type="checkbox" className={s.checkbox} id='check'/>
            <label for="check" className={s.menu}>
                <img src="http://cdn.onlinewebfonts.com/svg/img_211250.png" alt="" />
            </label>
            <div className={s.topPanel}>
                <div className={s.orderByContainer}>
                        <div className={s.orderBy}>
                        <span>Order By</span>
                            <select value={orderBy} className={s.order} onChange={handleOrder}>
                                <option value="default">Default</option>
                                <option value="a-z">A-Z</option>
                                <option value="z-a">Z-A</option>
                                <option value="higher-rockets">Higher Rockets</option>
                            </select>  
                        </div>
                </div>
            </div>

        </div>


    )
}


export default FilterBar

