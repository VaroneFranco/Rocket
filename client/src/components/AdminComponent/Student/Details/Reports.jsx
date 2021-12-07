import React from 'react'
import s from "./Reports.module.css"
function Reports({reports}) {
    console.log(reports)
    return (
        <div className={s.reports}>
            {reports.map((x)=>(
                <div className={s.reportContainer}>
                    {x}
                </div>
            ))}
        </div>
    )
}

export default Reports
