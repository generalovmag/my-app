import React from "react";
import m from "./Posts.module.css";

const PostItem = (props) => {
  return (
    <div className={m.post} key={props.kye}>
      <p>{props.text}</p>
      <span>{props.likeCount} likes</span>
    </div>
  )
}

export default PostItem;
