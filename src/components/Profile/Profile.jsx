import React from "react";
import styles from "./Profile.module.css";
import Preloader from "../preloader/preloader";

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    let statusWorked = props.profile.lookingForAJob ? 'активно ищу' : 'не рассматирваю'
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
                    <p className={styles.profile__discription}>24 november</p>
                    <p className={styles.profile__discription}>
                        <b>Статус поиска работы:</b> <br/>
                        <span>{statusWorked}</span>
                    </p>
                    <p className={styles.profile__discription}>
                        <b>Какую работу ищу:</b> <br/>
                        <span>{props.profile.lookingForAJobDescription}</span>
                    </p>
                    <p className={styles.profile__discription}>Moscow</p>
                    <p className={styles.profile__discription}>MGUDT'2014</p>
                    <p className={styles.profile__discription}>
                        <b>Обо мне:</b> <br/>
                        <span>{props.profile.aboutMe}</span>
                    </p>
                    <div className={styles.contacts + ' ' + styles.flex}>
                        <h3 className={styles.contacts_title}>Контакты</h3>
                        <a className={styles.profile__web} src='facebook.com'>
                            facebook
                        </a>
                        <a className={styles.profile__web} src="github.com">
                            github
                        </a>
                        <a className={styles.profile__web} src="instagra.com/sds">
                            instagram
                        </a>
                        <a className={styles.profile__web} src="https://twitter.com/@sdf">
                            twitter
                        </a>
                        <a className={styles.profile__web} src="vk.com/dimych">
                            vk
                        </a>
                        <a className={styles.profile__web} src="#">
                            youtube
                        </a>
                        <a className={styles.profile__web} src="#">
                            main site
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
