import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authSetUserDataThunk} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authSetUserDataThunk()
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

export default connect(mapStateToProps, {authSetUserDataThunk})(HeaderContainer);

