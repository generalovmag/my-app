import React from "react";
import m from "./Profile.module.css";
import MyPostContainer from "./MyPost/MyPostContainer";
import {connect} from "react-redux";
import {
    getUserProfileThunk,
    getUserStatusThunk,
    savePhoto,
    saveProfile,
    updateUserStatusThunk
} from "../../redux/profilePageReducer";
import {compose} from "redux";
import {AuthNavigate} from "../../hoc/withAuthNavigate";
import ProfileWithHooks from "./ProfileWithHooks";
import {withRouter} from "../../assets/withRouter";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.router.params.userID
        if (!userId) {
            userId = this.props.userID
        }
        if (!userId) {
            console.error("ID should exists in URI params or in state ('authorizedUserId')");

        } else {
            this.props.getUserProfileThunk(userId)
            this.props.getUserStatusThunk(userId)
        }
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.router.params.userID !== this.props.router.params.userID) {
            this.refreshProfile()
        }
    }

    updateUserStatus = (status) => {
        this.props.updateUserStatusThunk(status)
    }

    savePhoto = (file) => {
        this.props.savePhoto(file)
    }

    saveProfile = (profile) => {
        this.props.saveProfile(profile)
    }

    render() {
        return (
            <div className={m.profile_page + ' ' + m.flex}>
                <ProfileWithHooks
                    isOwner={!this.props.router.params.userID}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateUserStatus={this.updateUserStatus}
                    savePhoto={this.savePhoto}
                    saveProfile={this.saveProfile}
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
        updateUserStatusThunk,
        savePhoto,
        saveProfile
    }),
    AuthNavigate
)(withRouter(ProfileContainer))
