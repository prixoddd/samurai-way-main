import {addDialog, state, subscribe, updateNewDialogText, addPost, updateNewPostText} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {
    DialogsItemsDataPropsType,
    DialogsMessagesDataPropsType,
    ProfilePostDataPropsType
} from './App';
import {BrowserRouter} from 'react-router-dom';

export type AppStateTypeMinus = {
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

const rerenderEntireTree = (state: AppStateTypeMinus) => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addDialog={addDialog}
                 updateNewDialogText={updateNewDialogText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)