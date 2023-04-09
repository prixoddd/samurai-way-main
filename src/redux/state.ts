import {AppStateTypeMinus} from '../index';

let onChange = (state: AppStateTypeMinus) => {
    console.log(state)
}

type MyPostDataItemType = {
    message: string
    countLikes: string
}

type MyDialogItemType = {
    id: number
    message: string
}

export let state = {
    profilePage: {
        myPostData: [
            {message: "Hello how are you", countLikes: "1"},
            {message: "Nice weather outside", countLikes: "15"}
        ],
        newPostText: ''
    },
    dialogsPage: {
        messagesData: [
            {id: 1, name: "Nikita"},
            {id: 2, name: "Arkadi"},
            {id: 3, name: "Egor"},
            {id: 4, name: "Sika"},
            {id: 5, name: "hgfhfgh"},
            {id: 6, name: "Nikhfghgfhfgita"},
            {id: 7, name: "Nikhfghfita"},
        ],
        dialogsData: [
            {id: 1, message: "HI"},
            {id: 1, message: "How is your day"},
            {id: 1, message: "trololololo"},
            {id: 1, message: "sdfsdfdsfsdfs"},
        ],
        newDialogText: ""
    }
}

export const addPost = () => {

    let newPost: MyPostDataItemType = {
        message: state.profilePage.newPostText,
        countLikes: "0"

    }
    state.profilePage.myPostData.push(newPost);
    state.profilePage.newPostText = ''
    onChange(state);
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    onChange(state);
}

export const addDialog = () => {

    let newDialog: MyDialogItemType = {
        id: 1,
        message: state.dialogsPage.newDialogText

    }
    state.dialogsPage.dialogsData.push(newDialog)
    state.dialogsPage.newDialogText = ''
    onChange(state);
}

export const updateNewDialogText = (newDialog: string) => {
    state.dialogsPage.newDialogText = newDialog
    onChange(state);
}

export const subscribe = (observer: (state: AppStateTypeMinus) => void) => {
onChange = observer
}