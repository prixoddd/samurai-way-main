import React from 'react';
import {addDialogActionCreator, UpdateNewDialogActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {





    return <StoreContext.Consumer >
        {
        (store) => {

            let state = store.getState().dialogsPage
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