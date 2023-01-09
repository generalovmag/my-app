import React from "react";
import NewPost from "./Posts/NewPost/NewPost";
import Posts from "./Posts/Posts/Posts";
import m from "./MyPost.module.css";

const MyPost = (props) => {
    return (
        <div className={`${m.posts_container} ${m.flex}`}>
            <h2 className={m.posts__title}>My post</h2>
            <div className={`${m.posts__new_post} ${m.flex}`}>
                <NewPost textNewPost={props.textNewPost}
                         addPost={props.addPostActionCreator}
                         updateText={props.updateTextNewPostActionCreator}
                />
            </div>
            <Posts posts={props.posts}/>
        </div>
    );
};

export default MyPost;
