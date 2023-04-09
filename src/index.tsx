import {state, subscribe} from './redux/state';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {
    DialogsItemsDataPropsType,
    DialogsMessagesDataPropsType,
    ProfilePostDataPropsType
} from './App';
import {BrowserRouter} from 'react-router-dom';
import {addPost, updateNewPostText} from './redux/state';

export type AppStateTypeMinus = {
    profilePage: {
        myPostData: Array<ProfilePostDataPropsType>,
        newPostText: string
    },
    dialogsPage: {
        messagesData: Array<DialogsItemsDataPropsType>,
        dialogsData: Array<DialogsMessagesDataPropsType>
    }


}

const rerenderEntireTree = (state: AppStateTypeMinus) => {
    ReactDOM.render(
        <BrowserRouter>
            <App addPost={addPost}
                 appState={state}
                 updateNewPostText={updateNewPostText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)