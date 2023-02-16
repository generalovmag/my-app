import React from "react";
import styles from "./Profile.module.css";
import {createField} from "../../assets/assetsForm";
import {Field, Form, Formik} from "formik";

const ProfileBlockForm = props => {
    return <Formik
        initialValues={
            props.profile
    }
        onSubmit={(values) => {
            props.outEditMode()
            props.saveProfile(values)
        }}
    >
        {({
              values,
              handleChange, handleBlur,
              handleSubmit
          }) => (
            <Form className={styles.profile_text}>
                <div className={styles.row}>
                    <label htmlFor={'fullName'}>Ваше полное имя: </label>
                    {createField(styles.input, 'text', 'fullName', handleChange, handleBlur, values.fullName)}
                </div>
                <div className={styles.row}>
                    <label htmlFor={'aboutMe'}>Обо мне: </label>
                    {createField(styles.input, 'textarea', 'aboutMe', handleChange, handleBlur, values.aboutMe)}
                </div>
                <div className={styles.row}>
                    <label>
                        <Field
                            type="checkbox"
                            name={'lookingForAJob'}
                            className={styles.checkbox}
                        /> Вы ищите работу?
                    </label>
                    {values.lookingForAJob}
                </div>
                <div className={styles.row}>
                    <label htmlFor={'lookingForAJobDescription'}>Описание работы, которую вы ищите: </label>
                    {createField(styles.input, 'textarea', 'lookingForAJobDescription', handleChange, handleBlur, values.lookingForAJobDescription)}
                </div>
                <div className={styles.row}><b>Контакты</b></div>
                {Object.keys(props.profile.contacts).map(key => {
                    return <div className={styles.row} key={key}>
                        <label htmlFor={`${key}`}>{key}: </label>
                        {createField(styles.input, 'text', `contacts.${key}`, handleChange, handleBlur, values.contacts[key] || '')}
                    </div>
                })}
                <button type={"submit"} onClick={handleSubmit} className={styles.btn}>Сохранить</button>
            </Form>
        )
        }
    </Formik>
}


export default ProfileBlockForm
