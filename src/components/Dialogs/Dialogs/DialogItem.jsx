import React from 'react'
import m from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path ='/dialogItem/' + props.id

  return (
    <li className={m.dialogs_item} key={props.id}>
      <NavLink to={path}>{props.name}</NavLink>
    </li>
  )
}

export default DialogItem;