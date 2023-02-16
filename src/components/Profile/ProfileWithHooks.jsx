import React, {useState} from "react";
import styles from "./Profile.module.css";
import Preloader from "../preloader/preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from '../../assets/img/profile_user_photo.jpg'
import ProfileBlockForm from "./ProfileBlockForm";
import {ContactsProfile} from "./ContactsProfile";

const ProfileWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={styles.profile_page + ' ' + styles.flex}>
            <div className={`${styles.profile} ${styles.flex}`}>
                <div className={styles.profile_img_container}>
                    <img
                        src={props.profile.photos.large || userPhoto}
                        className={styles.profile__img}
                    />
                    {props.isOwner &&
                        <input type='file' className={styles.profile__img_update} onChange={onMainPhotoSelected}/>}
                </div>
                {editMode ? <ProfileBlockForm {...props} outEditMode={() => {setEditMode(false)}}/>
                : <ProfileBlock {...props} toEditMode={() => {setEditMode(true)}}/>
                }
            </div>
        </div>
    )
};

export default ProfileWithHooks;

const ProfileBlock = props => {
    return (
        <div className={`${styles.profile_text} ${styles.flex}`}>
            <h2 className={styles.profile__discription}>{props.profile.fullName}</h2>
            <ProfileStatus {...props}/>
            <p className={styles.profile__discription}><b>Дата рождения:</b> 24 ноября</p>
            <p className={styles.profile__discription}>
                <b>Статус поиска работы:</b> <br/>
                {props.profile.lookingForAJob ? <span>активно ищу</span> : <span>не ищу</span>}
            </p>
            <p className={styles.profile__discription}>
                <b>Какую работу ищу:</b> <br/>
                {props.profile.lookingForAJobDescription ?
                    <span>{props.profile.lookingForAJobDescription}</span>
                    : <span>Не указано, но наверное хорошую</span>
                }
            </p>
            <p className={styles.profile__discription}><b>Место жительства:</b> Москва</p>
            <p className={styles.profile__discription}><b>Образование: </b>МГУДТ 2014 </p>
            <p className={styles.profile__discription}>
                <b>Обо мне:</b> <br/>
                {props.profile.aboutMe ?
                    <span>{props.profile.aboutMe}</span>
                    : <span>Подробностей нет</span>
                }
            </p>
            <div className={styles.contacts + ' ' + styles.flex}>
                <h3 className={styles.contacts_title}>Как со мной связаться:</h3>
                {Object.keys(props.profile.contacts).map(key => {
                    return <ContactsProfile key={key} contactTitle={key} conactValue={props.profile.contacts[key]}/>
                })}
            </div>
            {props.isOwner && <button onClick={props.toEditMode} className={styles.btn}>Редактировать</button>}
        </div>
    )
}

