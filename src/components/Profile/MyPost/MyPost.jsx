import React from "react";
import NewPostForm from "./Posts/NewPost/NewPostForm";
import Posts from "./Posts/Posts/Posts";
import styles from "./MyPost.module.css";

const MyPost = (props) => {
    return (
        <div className={`${styles.posts_container} ${styles.flex}`}>
            <h2 className={styles.posts__title}>My post</h2>
            <div className={`${styles.posts__new_post} ${styles.flex}`}>
                <NewPostForm addPost={props.addPostActionCreator}/>
            </div>
            <Posts posts={props.posts}/>
        </div>
    );
};

export default MyPost;
