import React, {useEffect, useState} from "react";
import styles from "./Profile.module.css";
import Preloader from "../preloader/preloader";
import {NavLink} from "react-router-dom";

const ProfileWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const handleSubmitStatus = (event) => {
        setStatus(event.target.value)
    }

    const activateEditModeToggle = () => {
        setEditMode(true)
    }

    const deactivateEditModeToggle = () => {
        props.updateUserStatus(status)
        setEditMode(false)
    }

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={styles.profile_page + ' ' + styles.flex}>
            <div className={`${styles.profile} ${styles.flex}`}>
                <div className={styles.profile_img_container}>
                    <img
                        src={props.profile.photos.large}
                        className={styles.profile__img}
                    />
                </div>
                <div className={`${styles.profile_text} ${styles.flex}`}>
                    <h2 className={styles.profile__discription}>{props.profile.fullName}</h2>
                    <div className={styles.status_container}>
                        <p>Статус:</p>
                        {!editMode ? <div>
                                <span
                                    onClick={activateEditModeToggle}
                                    className={styles.status}>{
                                    status
                                }</span>
                            </div>
                            : <div>
                                <input type="text"
                                       onChange={handleSubmitStatus}
                                       autoFocus={true}
                                       onBlur={deactivateEditModeToggle}
                                       value={status} className={styles.status_input}/>
                            </div>
                        }
                    </div>
                    <p className={styles.profile__discription}>24 november</p>
                    <p className={styles.profile__discription}>
                        <b>Статус поиска работы:</b> <br/>
                        <span>активно ищу</span>
                    </p>
                    <p className={styles.profile__discription}>
                        <b>Какую работу ищу:</b> <br/>
                        <span>{props.profile.lookingForAJobDescription}</span>
                    </p>
                    <p className={styles.profile__discription}>Moscow</p>
                    <p className={styles.profile__discription}>MGUDT'2014 </p>
                    <p className={styles.profile__discription}>
                        <b>Обо мне:</b> <br/>
                        <span>{props.profile.aboutMe}</span>
                    </p>
                    <div className={styles.contacts + ' ' + styles.flex}>
                        <h3 className={styles.contacts_title}>Контакты</h3>
                        <NavLink className={styles.profile__web} src='facebook.com'>
                            facebook
                        </NavLink>
                        <NavLink className={styles.profile__web} src="github.com">
                            github
                        </NavLink>
                        <NavLink className={styles.profile__web} src="instagra.com/sds">
                            instagram
                        </NavLink>
                        <NavLink className={styles.profile__web} src="https://twitter.com/@sdf">
                            twitter
                        </NavLink>
                        <NavLink className={styles.profile__web} src="vk.com/dimych">
                            vk
                        </NavLink>
                        <NavLink className={styles.profile__web} src="#">
                            youtube
                        </NavLink>
                        <NavLink className={styles.profile__web} src="#">
                            main site
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfileWithHooks;
