import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {
    DialogsItemsDataPropsType,
    DialogsMessagesDataPropsType
} from '../../App';

type DialogsPropsType = {
    state: {
        messagesData: Array<DialogsItemsDataPropsType>,
        dialogsData: Array<DialogsMessagesDataPropsType>
    }
}

const Dialogs = (props: DialogsPropsType) => {

    let newMessage = React.createRef<HTMLTextAreaElement>()

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.state.messagesData.map(el => <DialogItem name={el.name} id={el.id}/>)}

            </div>
            <div className={s.messages}>
                {props.state.dialogsData.map(el => <Message message={el.message}/>)}
                <textarea ref={newMessage}></textarea>
                <button onClick={ () => alert("Hi dude")}>Add post</button>
            </div>



        </div>
    );
};

export default Dialogs;