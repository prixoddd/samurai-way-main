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
import StoreContext from '../../StoreContext';

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





    return <StoreContext.Consumer >
        {
        (store) => {

            let state = store.getState().dialogsPage
            // let state = store._state.dialogsPage

            let addDialog = () => {
                store.dispatch(addDialogActionCreator())
            }

            let onDialogChange = (body: string) => {
                store.dispatch(UpdateNewDialogActionCreator(body))
            }
                return <Dialogs updateMeaasgeBody={onDialogChange} sendMessage={addDialog} dialogsPage={state}/>

            }
        }
    </StoreContext.Consumer>

};

export default DialogsContainer;