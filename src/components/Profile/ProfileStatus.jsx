import React, {useEffect, useState} from "react";
import styles from "./Profile.module.css";

const ProfileStatus = (props) => {
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

    return (
        <div className={styles.status_container}>
            <p>Статус:</p>
            {!editMode ?
                <div>
                    <span
                        onClick={activateEditModeToggle}
                        className={styles.status}>{status}
                    </span>
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

    )
};

export default ProfileStatus;
