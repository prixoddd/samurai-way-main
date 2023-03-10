import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemsPropsType ={
    name: string;
    id: string
}

type MessagePropsType = {
    message: string
}

const DialogItem = (props: DialogItemsPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props:MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props: DialogItemsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Nikita" id='1'/>
                <DialogItem name="Victor" id='2'/>
                <DialogItem name="Arkadii" id='3'/>
                <DialogItem name="Baklazhan" id='4'/>
                <DialogItem name="Igor" id='5'/>
                <DialogItem name="Larisa" id='6'/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'} />
                <Message message={'How is your day?'} />
                <Message message={'Nice'} />
            </div>
        </div>


    );
};

export default Dialogs;