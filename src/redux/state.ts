import {rerenderEntireTree} from '../render';

type MyPostDataItemType = {
    message: string
    countLikes: string
}

export let state = {
    profilePage: {
        myPostData: [
            {message: "Hello how are you", countLikes: "1"},
            {message: "Nice weather outside", countLikes: "15"}
        ]
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
        ]
    }
}

export let addPost = (postMessage: string) => {

    let newPost: MyPostDataItemType = {
        message: postMessage,
        countLikes: "0"

    }
    state.profilePage.myPostData.push(newPost);
    rerenderEntireTree(state);
}