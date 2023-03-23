import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {
    AppStateType,
    DialogsItemsDataPropsType,
    DialogsMessagesDataPropsType,
    ProfilePostDataPropsType
} from './App';
import {BrowserRouter} from 'react-router-dom';
import {addPost} from './redux/state';

export type AppStateTypeMinus = {
        profilePage: {
            myPostData: Array<ProfilePostDataPropsType>
        },
        dialogsPage: {
            messagesData: Array<DialogsItemsDataPropsType>,
            dialogsData: Array<DialogsMessagesDataPropsType>
        }


}

export const rerenderEntireTree = (state: AppStateTypeMinus) => {
    ReactDOM.render(
        <BrowserRouter>
            <App addPost={addPost} appState={state}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}