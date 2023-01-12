import React from "react";
import m from "./Profile.module.css";
import MyPostContainer from "./MyPost/MyPostContainer";
import Profile from "./Profile";
import {connect} from "react-redux";
import { setUserProfileThunk} from "../../redux/profilePageReducer";
import {useLocation, useNavigate, useParams} from 'react-router-dom'

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.setUserProfileThunk(this.props.router.params.userID)
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

export default connect(mapStateToProps, {setUserProfileThunk})(withRouter(ProfileContainer));
