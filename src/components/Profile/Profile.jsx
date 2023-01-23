import React from "react";
import styles from "./Profile.module.css";
import Preloader from "../preloader/preloader";
import {NavLink} from "react-router-dom";

class Profile extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditModeToggle = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditModeToggle = () => {
        this.props.updateUserStatus(this.state.status)
        this.setState({
            editMode: false
        })

    }

    editStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if ( prevProps.status !== this.props.status ) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        if (!this.props.profile) {
            return <Preloader/>
        }
        let statusWorked = this.props.profile.lookingForAJob ? 'активно ищу' : 'не рассматирваю'
        return (
            <div className={styles.profile_page + ' ' + styles.flex}>
                <div className={`${styles.profile} ${styles.flex}`}>
                    <div className={styles.profile_img_container}>
                        <img
                            src={this.props.profile.photos.large}
                            className={styles.profile__img}
                        />
                    </div>
                    <div className={`${styles.profile_text} ${styles.flex}`}>
                        <h2 className={styles.profile__discription}>{this.props.profile.fullName}</h2>
                        <div className={styles.status_container}>
                            {!this.state.editMode ? <div>
                                    <span
                                        onClick={this.activateEditModeToggle}
                                        className={styles.status}>{
                                        this.props.status ? this.props.status : 'Статус не указан'
                                    }</span>
                                </div>
                                : <div>
                                    <input type="text"
                                           onChange={this.editStatus}
                                           autoFocus={true}
                                           onBlur={this.deactivateEditModeToggle}
                                           value={this.state.status} className={styles.status_input}/>
                                </div>
                            }
                        </div>
                        <p className={styles.profile__discription}>24 november</p>
                        <p className={styles.profile__discription}>
                            <b>Статус поиска работы:</b> <br/>
                            <span>{statusWorked}</span>
                        </p>
                        <p className={styles.profile__discription}>
                            <b>Какую работу ищу:</b> <br/>
                            <span>{this.props.profile.lookingForAJobDescription}</span>
                        </p>
                        <p className={styles.profile__discription}>Moscow</p>
                        <p className={styles.profile__discription}>MGUDT'2014 </p>
                        <p className={styles.profile__discription}>
                            <b>Обо мне:</b> <br/>
                            <span>{this.props.profile.aboutMe}</span>
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
        );
    }
};

export default Profile;
