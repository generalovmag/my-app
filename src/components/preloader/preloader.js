import React from "react";
import preloader from "../../assets/img/preloader.svg";
import styles from './preloader.module.css'

let Preloader = (props) => {
  return (
    <div className={styles.container}>
      <img src={preloader} alt="загрузка старницы"/>
    </div>
  )
}

export default Preloader