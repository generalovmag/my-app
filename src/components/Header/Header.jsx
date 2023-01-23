import React from "react";
import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {logoutUserThunk} from "../../redux/authReducer";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header_container}>
                    <a link={'#'} className={styles.header__logo}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="50" width="80"
                             viewBox="-4.79889 -4.75 41.59038 28.5">
                            <path fillRule="evenodd" fill="#ffffff"
                                  d="M31.2584 1.2866C31.4808.5449 31.2584 0 30.2 0h-3.5c-.89 0-1.3002.4708-1.5227.9898 0 0-1.7799 4.3384-4.3013 7.1565-.8157.8157-1.1866 1.0753-1.6315 1.0753-.2225 0-.5562-.2596-.5562-1.0011v-6.934C18.6883.3967 18.4417 0 17.7 0h-5.5c-.5561 0-.8906.413-.8906.8045 0 .8436 1.2607 1.0382 1.3906 3.4113V9.37c0 1.13-.204 1.3349-.649 1.3349-1.1865 0-4.0728-4.3578-5.7845-9.3442C5.931.3915 5.5945 0 4.7 0H1.2C.2 0 0 .4708 0 .9898c0 .927 1.1866 5.525 5.5249 11.6061C8.4171 16.749 12.492 19 16.2 19c2.2248 0 2.5-.5 2.5-1.3612V14.5c0-1 .2108-1.1996.9153-1.1996.519 0 1.409.2596 3.4855 2.2619C25.474 17.9354 25.8652 19 27.2 19h3.5c1 0 1.5-.5 1.2116-1.4867-.3157-.9834-1.4487-2.4103-2.9521-4.1016-.8158-.9641-2.0394-2.0023-2.4103-2.5215-.519-.6674-.3707-.964 0-1.5573 0 0 4.2643-6.007 4.7092-8.0463z"/>
                        </svg>
                    </a>
                    <div className={styles.auth}>
                        { props.isAuthUser ?
                            <div>
                                <NavLink to={'/personalRoom'} >{props.email}</NavLink>
                                <br/>
                                <button className={styles.logout_btn} onClick={props.logoutUserThunk}>Выйти</button>
                            </div>
                        : <NavLink to={'/login'} className={styles.login}>Авторизация</NavLink>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;

