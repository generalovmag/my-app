import React from "react";
import m from "./NewPost.module.css";

const NewPost = (props) => {
  let textNewPost = props.textNewPost

  let addPost = () => {
    props.addPost()
  }

  let updateText = (e) => {
    let text = e.target.value
    props.updateText(text)
  }

  return <div className={`${m.container} ${m.flex}`}>
    <textarea name="" id="" cols="20" rows="5"
              className={m.field}
              onChange={ updateText }
              value={ textNewPost }/>
    <button onClick={ addPost } className={m.button}>Add post</button>
  </div>
};

export default NewPost;
