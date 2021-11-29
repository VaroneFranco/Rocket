import React from 'react'
import { useHistory } from 'react-router-dom'
import s from "./GoBackButton.module.css"
function GoBackButton() {
    let history = useHistory()
    return (
        <div className={s.container} onClick={()=>history.goBack()}>
            GO BACK
        </div>
    )
}

export default GoBackButton
