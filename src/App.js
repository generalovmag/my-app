import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Groups from "./components/Group/Groups";
import Photo from "./components/Photo/Photo";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {compose} from "redux";
import {withRouter} from "./assets/withRouter";
import {connect} from "react-redux";
import Preloader from "./components/preloader/preloader";
import {initializationApp} from "./redux/appReducer";

class App extends React.Component {

    componentDidMount() {
        this.props.initializationApp()
    }

    render() {
        if (!this.props.initialization) {
            return <Preloader />
        }
        return (

                <div className="app-wrapper flex">
                    <HeaderContainer/>
                    <div className="container flex">
                        <Navigation/>
                        <div className="container_content">
                            <div className="main">
                                <Routes>
                                    <Route path='/profile/:userID?'
                                           element={<ProfileContainer/>}/>
                                    <Route path='/news/*'
                                           element={<News/>}/>
                                    <Route path='/dialogItem/*'
                                           element={<DialogsContainer/>}/>
                                    <Route path='/users/*'
                                           element={<UsersContainer/>}/>
                                    <Route path='/groups/*'
                                           element={<Groups/>}/>
                                    <Route path='/photo/*'
                                           element={<Photo/>}/>
                                    <Route path='/music'
                                           element={<Music/>}/>
                                    <Route path='/settings'
                                           element={<Settings/>}/>
                                    <Route path='/login'
                                           element={<LoginPage/>}/>
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        initialization: state.initializationReducer.initialization
    }
}

export default compose (
    withRouter,
    connect(mapStateToProps, {initializationApp})
)(App);
