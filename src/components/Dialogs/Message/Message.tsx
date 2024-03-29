import React from "react"
import s from "./../Dialogs.module.css"

type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}

export default Message
