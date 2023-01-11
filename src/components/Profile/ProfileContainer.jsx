import React from "react";
import m from "./Profile.module.css";
import MyPostContainer from "./MyPost/MyPostContainer";
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setUserProfile} from "../../redux/profilePageReducer";
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import {profileAPI} from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userID
        if (!userId) {
            userId = 27388
        }
        profileAPI.setUserProfile(userId).then(data => {
            this.props.setUserProfile(data)
        })
    }

    render() {
        return (
            <div className={m.profile_page + ' ' + m.flex}>
                <Profile {...this.props}/>
                <MyPostContainer/>
            </div>
        );
    }
};

export function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePageReducer.posts,
        newPostText: state.profilePageReducer.newPostText,
        profile: state.profilePageReducer.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));
