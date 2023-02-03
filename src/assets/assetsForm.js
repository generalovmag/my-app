import styles from "../components/Login/login.module.css";
import {Field} from "formik";
import React from "react";

export const createField = (className, type, name, onChange, onBlur, value, props = {}, text = '') => {
    return <div>
        <Field
            className={styles}
            type={type}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            {...props}
        /> {text}
    </div>
}