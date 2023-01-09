import React from "react";
import MyPost from "./MyPost";
import {addPostActionCreator, updateTextNewPostActionCreator} from "../../../redux/profilePageReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePageReducer.posts,
        textNewPost: state.profilePageReducer.newPostText
    }
}

const MyPostContainer = connect(mapStateToProps, {addPostActionCreator, updateTextNewPostActionCreator})(MyPost)

export default MyPostContainer;