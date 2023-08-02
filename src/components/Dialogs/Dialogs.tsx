import React from "react"
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import { DialogsPropsType } from "./DialogsContainer"
import { Field, reduxForm, SubmitHandler } from "redux-form"
import { maxLengthCreator, requiredField } from "utils/validators/validators"
import { Textarea } from "components/common/FormsControls/FormsControls"

const Dialogs = (props: DialogsPropsType) => {
    // const Dialogs = (props: any) => {

    let addNewMessage: SubmitHandler<{}, {}, string> = (values: any) => {
        console.log(values.newMessageBody)
        props.sendMessage(values.newMessageBody)
        // Do something with the form values (message body) here
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPage.messagesData.map((el, index) => (
                    <DialogItem name={el.name} id={el.id} key={index} />
                ))}
            </div>
            <div className={s.messages}>
                {props.dialogsPage.dialogsData.map((el, index) => (
                    <Message message={el.message} key={index} />
                ))}
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

const maxLength100 = maxLengthCreator(100)
const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    validate={[requiredField, maxLength100]}
                    name="newMessageBody"
                    placeholder="Enter your message"
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)

export default Dialogs
