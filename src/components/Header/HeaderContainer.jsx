import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {authSetUserData} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.authSetUserData({id, email, login})
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        email: state.authReducer.email,
        login: state.authReducer.login,
        isAuthUser: state.authReducer.isAuthUser

    }
}

export default connect(mapStateToProps, {authSetUserData})(HeaderContainer);

