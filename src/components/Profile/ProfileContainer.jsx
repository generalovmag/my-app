import React from "react";
import m from "./Profile.module.css";
import MyPostContainer from "./MyPost/MyPostContainer";
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setUserProfile} from "../../redux/profilePageReducer";
import {useLocation, useNavigate, useParams} from 'react-router-dom'

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

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.router.params.userID
        if (!userID) {
            userID = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
            .then(response => {
                this.props.setUserProfile(response.data)
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

let mapStateToProps = (state) => {
    return {
        posts: state.profilePageReducer.posts,
        newPostText: state.profilePageReducer.newPostText,
        profile: state.profilePageReducer.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));
