import React from "react";
import styles from "./Posts.module.css";

const PostItem = (props) => {
  return (
    <div className={styles.post} key={props.kye}>
      <p>{props.text}</p>
      <span>{props.likeCount} likes</span>
    </div>
  )
}

export default PostItem;
