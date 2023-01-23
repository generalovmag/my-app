import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

let mapStateToPropsForNavigate = (state) => {
    return {
        isAuth: state.authReducer.isAuthUser
    }
}

export const AuthNavigate = (Component) => {
    class NavigateComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to={'/login'}/>
            return <Component {...this.props}/>
        }
    }

    let connectedWithAuthNavigate = connect(mapStateToPropsForNavigate)(NavigateComponent)

    return connectedWithAuthNavigate
}