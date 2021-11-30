import React from 'react'
import {NavLink} from "react-router-dom"
import s from "./Item.module.scss"

function Item({text, to, svg, open}) {
    return (
        <NavLink to={to} className={open ? s.linkOpen : s.normal}>
          <div>
            {svg}
          </div>
          {open ? <p>{text}</p> : null}
        </NavLink>
      );
}

export default Item
