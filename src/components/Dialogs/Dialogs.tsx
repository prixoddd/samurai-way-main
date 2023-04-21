import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';


const Dialogs = (props: DialogsPropsType) => {
// const Dialogs = (props: any) => {

    let newDialog = React.createRef<HTMLTextAreaElement>()

    let addDialog = () => {
        props.sendMessage()
    }

    let onDialogChange = () => {
        if (newDialog.current) {
            props.updateMessageBody(newDialog.current?.value)
        }

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPage.messagesData.map((el,index) => <DialogItem name={el.name} id={el.id} key={index}/>)}
            </div>
            <div className={s.messages}>
                {props.dialogsPage.dialogsData.map((el,index) => <Message message={el.message} key={index}/>)}
                <textarea onChange={onDialogChange} ref={newDialog} value={props.dialogsPage.newDialogText}></textarea>
                <button onClick={addDialog}>Add post</button>
            </div>
        </div>
    );
};

export default Dialogs;