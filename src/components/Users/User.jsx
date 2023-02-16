import React from 'react';
import styles from './users.module.css'
import {NavLink} from "react-router-dom";
import userPhoto from '../../assets/img/profile_user_photo.jpg'

let User = ({user, unfollow, follow}) => {
    let u = user
    return <div className={`${styles.flex} ${styles.profile}`} key={u.id}>
        <div className={`${styles.flex} ${styles.img_container}`}>
            <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="Изображение проиля"
                     className={styles.img}/>
            </NavLink>

            {u.followed
                ? <button className={styles.button} onClick={(event) => {
                    event.target.disabled = true
                    unfollow(u.id)
                    event.target.disabled = false
                }}>Удалить из друзей</button>
                : <button className={styles.button} onClick={(event) => {
                    event.target.disabled = true
                    follow(u.id)
                    event.target.disabled = false
                }}>Добавить в друзья</button>
            }
        </div>
        <div className={`${styles.flex} ${styles.info}`}>
            <div className={styles.user}>
                <h2 className={styles.user_name}>{u.name} {'u.lastName'}</h2>
                <p className={styles.user_slogan}>{u.status}</p>
            </div>
            <div className={styles.location}>
                <p className={styles.country}>{'u.location.country'},</p>
                <p className={styles.city}>{'u.location.city'}</p>
            </div>
        </div>
    </div>
}

export default User;