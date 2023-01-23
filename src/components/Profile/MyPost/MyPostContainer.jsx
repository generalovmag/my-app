import React from "react";
import MyPost from "./MyPost";
import {addPostActionCreator} from "../../../redux/profilePageReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePageReducer.posts,
    }
}

const MyPostContainer = connect(mapStateToProps, {addPostActionCreator})(MyPost)

export default MyPostContainer;