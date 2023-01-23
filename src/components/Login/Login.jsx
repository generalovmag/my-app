import React from 'react';
import styles from './login.module.css'
import {Field, Form, Formik} from "formik";
import * as yup from "yup";
import {authSetLoginUserThunk} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

const LoginFormik = (props) => {
    const validationForm = yup.object().shape({
        email: yup.string().email('Введите корректный email').required('Обязательно для заполнения'),
        password: yup.string().required('Обязательно для заполнения')
    })

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: true
            }}
            validateOnBlur
            onSubmit={(values) => {
                props.pushLogin(values)
            }}
            validationSchema={validationForm}
        >
            {({
                  values, errors, touched,
                  handleChange, handleBlur, isValid,
                  handleSubmit, dirty
              }) => (
                <Form className={styles.form_login}>
                    <div className={styles.row}>
                        <label htmlFor={'email'}>Email</label><br/>
                        <Field
                            className={styles.input}
                            type={'text'}
                            name={'email'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                    </div>
                    {touched.login && errors.login && <p className={styles.error}>{errors.login}</p>}
                    <div className={styles.row}>
                        <label htmlFor={'password'}>Пароль</label><br/>
                        <Field
                            className={styles.input}
                            type={'password'}
                            name={'password'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                    </div>
                    {touched.password && errors.password && <p className={styles.error}>{errors.password}</p>}
                    <div className={styles.row}>
                        <label>
                            <Field
                                type="checkbox"
                                name={'rememberMe'}
                                className={styles.checkbox}
                            /> Запомнить меня
                        </label>
                        {values.rememberMe}
                    </div>
                    <div className={styles.row}>
                        <button
                            className={styles.btn}
                            disabled={!isValid && !dirty}
                            onClick={handleSubmit}
                            type={"submit"}
                        >Вход
                        </button>
                    </div>
                </Form>
            )
            }
        </Formik>
    )
}

const Login = (props) => {
    const pushLogin = (values) => {
        console.log(values)
        let {email, password, rememberMe = true, captcha = false} = values
        props.authSetLoginUserThunk({email, password, rememberMe, captcha})
    }

    if (props.isAuthUser) {
        return <Navigate to={'/profile'} />
    }

    return (
        <div>
            <h1>Войти</h1>
            <LoginFormik pushLogin={pushLogin}/>
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        isAuthUser: state.authReducer.isAuthUser

    }
}

export default connect (mapStateToProps, {authSetLoginUserThunk})(Login);