import React from "react";
import m from "./Profile.module.css";
import MyPostContainer from "./MyPost/MyPostContainer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunk, getUserStatusThunk, updateUserStatusThunk} from "../../redux/profilePageReducer";
import {compose} from "redux";
import {AuthNavigate} from "../../hoc/withAuthNavigate";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = window.location.pathname.slice(9)
        if (!userId) {
            userId = this.props.userID
            // if (!userId) {
            //     this.props.history.push('/login')
            // }
        }
        this.props.getUserProfileThunk(userId)
        this.props.getUserStatusThunk(userId)
    }

    updateUserStatus = (status) => {
        this.props.updateUserStatusThunk(status)
    }

    render() {
        return (
            <div className={m.profile_page + ' ' + m.flex}>
                <Profile
                    profile={this.props.profile}
                    status={this.props.status}
                    updateUserStatus={this.updateUserStatus}
                />
                <MyPostContainer/>
            </div>
        );
    }
};

let mapStateToProps = (state) => {
    return {
        posts: state.profilePageReducer.posts,
        profile: state.profilePageReducer.profile,
        status: state.profilePageReducer.status,
        userID: state.authReducer.id
    }
}

export default compose(
    connect(mapStateToProps, {
        getUserProfileThunk,
        getUserStatusThunk,
        updateUserStatusThunk
    }),
    AuthNavigate
)(ProfileContainer)
