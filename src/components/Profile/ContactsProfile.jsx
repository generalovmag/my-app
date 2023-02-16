import {NavLink} from "react-router-dom";
import styles from "./Profile.module.css";

export const ContactsProfile = ({ contactTitle, conactValue }) => {
    return <div className={styles.contacts}>
        <b>{contactTitle}:</b> <NavLink to={conactValue}>{conactValue}</NavLink>
    </div>
}

export const ContactsProfileEdit = ({ contactTitle, conactValue }) => {
    return <div className={styles.contacts}>
        <b>{contactTitle}:</b> <NavLink to={conactValue}>{conactValue}</NavLink>
    </div>
}

