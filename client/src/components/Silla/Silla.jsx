import React, {useState} from "react";
import style from "./Silla.module.css";
import axios from "axios";

function Silla({ img, name, surname, _id }) { 
  //variables que sirven para deshabilitar botones like/report cuando se presionan
  const [likeOrReport, setlikeOrReport] = useState({like:false, report:false})

    
  const onChange = async (e) => {
    e.preventDefault();
    if (e.target.value === "like") {
      axios(`localhost:3001/increaseLike/${_id}`);
      setlikeOrReport({...likeOrReport, like:true})
    }
    if (e.target.value === "reports"){
        axios(`localhost:3001/increaseReports/${_id}`)
        setlikeOrReport({...likeOrReport, report:true})
    }
  };  




  return (
    <div className={style.silla__container}>
      <img alt="silla" src={img} className={style.silla__img} />

      <h4 className={style.silla__name}>{name}</h4>
      <h4 className={style.silla__surname}>{surname}</h4>

      <select className={style.silla__select} onChange={(e) => onChange(e)}>
        
        <option disabled selected value="">Like / Report</option>
        
        {likeOrReport.like===false ? 
        <option value="like" name="">
          Like 👍
        </option> :
         <option disabled value="like" name="">
         Like 👍
       </option>
        }

        {likeOrReport.report===false ? 
        <option value="reports">Report 🚫</option> :
        <option disabled value="reports">Report 🚫</option>
        } 
      </select>      
    </div>
  );
}

export default Silla;
