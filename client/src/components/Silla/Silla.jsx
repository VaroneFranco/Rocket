import React from 'react';
import style from "./Silla.module.css";

function Silla({img, name, surname}) {
    return (
        <div className={style.silla__container}>

            <img alt="silla" src={img} className={style.silla__img}/>

            <h4 className={style.silla__name}>{name}</h4>
            <h4 className={style.silla__surname}>{surname}</h4>

            <select name="" className={style.silla__select}>
                <option value="">Like / Report</option>  
                <option value="">Like 👍</option>  
                <option value="">Report 🚫</option>       
            </select>  

        </div>
    );
};

export default Silla;
