import React from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Groups from "./components/Group/Groups";
import Photo from "./components/Photo/Photo";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper flex">
                <Header/>
                <div className="container flex">
                    <Navigation/>
                    <div className="container_content">
                        <div className="main">
                            <Routes>
                                <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                                <Route path='/news/*' element={<News/>}/>
                                <Route path='/dialogItem/*' element={<DialogsContainer/>}/>
                                <Route path='/users/*' element={<UsersContainer/>}/>
                                <Route path='/groups/*' element={<Groups/>}/>
                                <Route path='/photo/*' element={<Photo/>}/>
                                <Route path='/music' element={<Music/>}/>
                                <Route path='/settings' element={<Settings/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
