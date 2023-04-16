import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {
    DialogsItemsDataPropsType,
    DialogsMessagesDataPropsType
} from '../../App';
import {ActionTypes} from '../../redux/store';
import {addDialogActionCreator, UpdateNewDialogActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

type DialogsPropsType = {
    dialogsPage: {
        messagesData: Array<DialogsItemsDataPropsType>,
        dialogsData: Array<DialogsMessagesDataPropsType>,
        newDialogText: string
    },
    // addDialog: () => void
    // updateNewDialogText: (s: string) => void
    dispatch: (action: ActionTypes) => void
}

const DialogsContainer = (props: any) => {

    let state = props.store.getState().dialogsPage

    let addDialog = () => {
        props.store.dispatch(addDialogActionCreator())
    }

    let onDialogChange = (body: string) => {
        props.store.dispatch(UpdateNewDialogActionCreator(body))

    }

    return <Dialogs updateMeaasgeBody={onDialogChange} sendMessage={addDialog} dialogsPage={state}/>
};

export default DialogsContainer;