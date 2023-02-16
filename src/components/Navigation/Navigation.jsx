import React from "react";
import m from'./Navigation.module.css'
import {NavLink} from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav className={m.nav}>
      <ul className={`${m.list} ${m.flex}`}>
        <li className={m.item}>
          <NavLink to={'/profile/'} className={navData => navData.isActive? `${m.link} ${m.active}`: m.link}>
            Моя старница</NavLink>
        </li>
        <li className={m.item}>
          <NavLink to='/news' className={navData => navData.isActive? `${m.link} ${m.active}`: m.link}>
            Новости</NavLink>
        </li>
        <li className={m.item}>
          <NavLink to='/dialogItem/' className={navData => navData.isActive? `${m.link} ${m.active}`: m.link}>
            Сообщения</NavLink>
        </li>
        <li className={m.item}>
          <NavLink to='/users/' className={navData => navData.isActive? `${m.link} ${m.active}`: m.link}>
            Друзья</NavLink>
        </li>
        <li className={m.item}>
          <NavLink to='/groups/' className={navData => navData.isActive? `${m.link} ${m.active}`: m.link}>
            Группы</NavLink>
        </li>
        <li className={m.item}>
          <NavLink to='/Photo/' className={navData => navData.isActive? `${m.link} ${m.active}`: m.link}>
            Фотографии</NavLink>
        </li>
        <li className={m.item}>
          <NavLink to='/music' className={navData => navData.isActive? `${m.link} ${m.active}`: m.link}>
            Музыка</NavLink>
        </li>
        <li className={m.item}>
          <NavLink to='/settings' className={navData => navData.isActive? `${m.link} ${m.active}`: m.link}>
            Настройки</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;