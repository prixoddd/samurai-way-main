import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

export type DialogsItemsDataPropsType = {
    name: string
    id: number
}
export type DialogsMessagesDataPropsType = {
    message: string
    id: number
}
export type ProfilePostDataPropsType = {
    message: string
    countLikes: string
}

const App = () => {

    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/users' render={() => <UsersContainer/> } />

            </div>
        </div>


    )
}


export default App;
