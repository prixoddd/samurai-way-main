import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

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

export type AppStateType = {
    addPost: () => void,
    updateNewPostText: (s: string) => void,
    appState: {
        profilePage: {
            myPostData: Array<ProfilePostDataPropsType>,
            newPostText: string
        },
        dialogsPage: {
            messagesData: Array<DialogsItemsDataPropsType>,
            dialogsData: Array<DialogsMessagesDataPropsType>
        }
    }

}


const App = (props: AppStateType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route path='/profile' render={() => <Profile addPost={props.addPost}
                                                              updateNewPostText={props.updateNewPostText}
                                                              profilePage={props.appState.profilePage}/>}
                />
                <Route path='/dialogs' render={() => <Dialogs state={props.appState.dialogsPage}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>

            </div>
        </div>


    )
}


export default App;
