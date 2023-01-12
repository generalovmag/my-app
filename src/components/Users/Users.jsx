import React from 'react';
import styles from './users.module.css'
import userPhoto from '../../assets/img/17879520.png'
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pages = []
    let countPages = Math.ceil(props.totalUsersCount / props.pageSize)
    for (let i = 1; i <= countPages; i++) {
        pages.push(i)
    }
    let curP = props.currentPage
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5
    let curPL = curP + 5
    let slicedPages = pages.slice(curPF, curPL)

    return <div>
        <div className={`${styles.pagination_container} ${styles.flex}`}>
            {
                slicedPages.map(page => {
                    return (
                        <span key={page}
                              className={`${styles.page_number} ${page === props.currentPage ? styles.page_action : ''}`}
                              onClick={() => {
                                  props.onPageChanged(page)
                              }}>{page}</span>)
                })
            }
        </div>
        {
            props.users.map(u =>
                <div className={`${styles.flex} ${styles.profile}`} key={u.id}>
                    <div className={`${styles.flex} ${styles.img_container}`}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="Изображение проиля"
                                 className={styles.img}/>
                        </NavLink>

                        {u.followed
                            ? <button className={styles.button} onClick={(event) => {
                                event.target.disabled = true
                                props.unfollow(u.id)
                                event.target.disabled = false
                            }}>Удалить из друзей</button>
                            : <button className={styles.button} onClick={(event) => {
                                event.target.disabled = true
                                props.follow(u.id)
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
                </div>)
        }
    </div>
}

export default Users;