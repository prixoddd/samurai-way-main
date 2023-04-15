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
import {ReduxStoreType} from './redux/redux-store';
// import {StoreType} from './redux/store';
// import { ReduxStoreType} from './redux/redux-store';

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
    addDialog: () => void,
    updateNewDialogText: (s: string) => void,
    appState: {
        profilePage: {
            myPostData: Array<ProfilePostDataPropsType>,
            newPostText: string
        },
        dialogsPage: {
            messagesData: Array<DialogsItemsDataPropsType>,
            dialogsData: Array<DialogsMessagesDataPropsType>,
            newDialogText: string
        }
    }

}
// type PropsType = {
//     store: StoreType
// }


const App: React.FC<{store:ReduxStoreType}> = (props) => {



    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route path='/profile' render={() => <Profile
                    // addPost={props.store.addPost.bind(props.store)}
                    dispatch={props.store.dispatch.bind(props.store)}
                    // updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                    profilePage={props.store.profilePage}
                />}/>
                <Route path='/dialogs' render={() => <Dialogs
                    // addDialog={props.store.addDialog.bind(props.store)}
                    // updateNewDialogText={props.store.updateNewDialogText.bind(props.store)}
                    dispatch={props.store.dispatch.bind(props.store)}
                    dialogsPage={props.store.dialogsPage}

                />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>

            </div>
        </div>


    )
}


export default App;
