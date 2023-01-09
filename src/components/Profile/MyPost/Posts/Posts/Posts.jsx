import React from "react";
import m from "./Posts.module.css";
import PostItem from "./PostItem";

const Posts = (props) => {
  let posts = props.posts;
  let postsElements = posts.map(el => <PostItem text={el.text} key={el.id} likeCount={el.likeCount} /> )

  return (
    <div className={`${m.posts} ${m.flex}`}>
      {postsElements}
    </div>
  );
};

export default Posts;
