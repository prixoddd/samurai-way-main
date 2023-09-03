import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { DialogsItemsDataPropsType, DialogsMessagesDataPropsType, ProfilePostDataPropsType } from "App"
import SamuraiJsApp from "./App"

export type AppStateTypeMinus = {
    profilePage: {
        myPostData: Array<ProfilePostDataPropsType>
        newPostText: string
    }
    dialogsPage: {
        messagesData: Array<DialogsItemsDataPropsType>
        dialogsData: Array<DialogsMessagesDataPropsType>
        newDialogText: string
    }
}

ReactDOM.render(<SamuraiJsApp />, document.getElementById("root"))
