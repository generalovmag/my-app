import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authSetUserDataThunk, logoutUserThunk} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    logoutUser () {
        this.props.logoutUserThunk()
    }

    render() {
        return (
            <Header {...this.props} logoutUser={this.logoutUser}/>
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

export default connect(mapStateToProps, {logoutUserThunk} )(HeaderContainer);

