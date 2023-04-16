import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux-store';
import './index.css';
import App, {
    DialogsItemsDataPropsType,
    DialogsMessagesDataPropsType,
    ProfilePostDataPropsType
} from './App';
import {BrowserRouter} from 'react-router-dom';
import ReduxStore from './redux/redux-store';
//ink

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

const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(()=>{
    let state = store.getState()
    rerenderEntireTree()
})