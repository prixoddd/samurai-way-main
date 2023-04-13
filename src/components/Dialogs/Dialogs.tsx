import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {
    DialogsItemsDataPropsType,
    DialogsMessagesDataPropsType
} from '../../App';
import {ActionTypes} from '../../redux/state';
import {addDialogActionCreator, UpdateNewDialogActionCreator} from '../../redux/dialogs-reducer';

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

const Dialogs = (props: DialogsPropsType) => {

    let newDialog = React.createRef<HTMLTextAreaElement>()

    let addDialog = () => {
        props.dispatch(addDialogActionCreator())
    }

    let onDialogChange = () => {
        if (newDialog.current) {
            props.dispatch(UpdateNewDialogActionCreator(newDialog.current?.value))
        }

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPage.messagesData.map(el => <DialogItem name={el.name} id={el.id}/>)}

            </div>
            <div className={s.messages}>
                {props.dialogsPage.dialogsData.map(el => <Message message={el.message}/>)}
                <textarea onChange={onDialogChange} ref={newDialog} value={props.dialogsPage.newDialogText}></textarea>
                <button onClick={addDialog}>Add post</button>
            </div>



        </div>
    );
};

export default Dialogs;