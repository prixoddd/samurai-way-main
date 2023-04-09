import {AppStateTypeMinus} from '../index';

type MyPostDataItemType = {
    message: string
    countLikes: string
}
type MyDialogItemType = {
    id: number
    message: string
}
export type StoreType = {
    _state: AppStateTypeMinus
    getState: () => AppStateTypeMinus
    // updateNewPostText: (newText: string) => void
    // addPost: () => void
    // updateNewDialogText: (newDialog: string) => void
    // addDialog: () => void
    _callSubscriber: (state: AppStateTypeMinus) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionTypes) => void
}

type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewTextActionType = {
    type: 'UPDATE.NEW.POST.TEXT'
    newText: string
}
type AddDialogActionType = {
    type: 'ADD-DIALOG'
}
type updateNewDialogTextActionType = {
    type: 'UPDATE.NEW.DIALOG.TEXT'
    newDialog: string
}

export type ActionTypes = AddPostActionType | UpdateNewTextActionType | AddDialogActionType | updateNewDialogTextActionType

export const addPostActionCreator = (): AddPostActionType => ({type: 'ADD-POST'})
export const UpdateNewTextActionCreator = (newText: string): UpdateNewTextActionType => ({
        type:'UPDATE.NEW.POST.TEXT',
        newText: newText
})

export const addDialogActionCreator = (): AddDialogActionType => ({type:'ADD-DIALOG'})
export const UpdateNewDialogActionCreator = (newDialog: string): updateNewDialogTextActionType => ({
    type:'UPDATE.NEW.DIALOG.TEXT',
    newDialog: newDialog
})



export let store: StoreType = {
    _state: {
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
    },
    _callSubscriber() {
        console.log('rerender')
    },

    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },

    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText
    //     this._callSubscriber(this._state);
    // },
    // addPost() {
    //
    //     let newPost: MyPostDataItemType = {
    //         message: this._state.profilePage.newPostText,
    //         countLikes: "0"
    //
    //     }
    //     this._state.profilePage.myPostData.push(newPost);
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber(this._state);
    // },
    // updateNewDialogText(newDialog: string) {
    //     this._state.dialogsPage.newDialogText = newDialog
    //     this._callSubscriber(this._state);
    // },
    // addDialog() {
    //
    //     let newDialog: MyDialogItemType = {
    //         id: 1,
    //         message: this._state.dialogsPage.newDialogText
    //
    //     }
    //     this._state.dialogsPage.dialogsData.push(newDialog)
    //     this._state.dialogsPage.newDialogText = ''
    //     this._callSubscriber(this._state);
    // },


    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost: MyPostDataItemType = {
                message: this._state.profilePage.newPostText,
                countLikes: "0"

            }
            this._state.profilePage.myPostData.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE.NEW.POST.TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state);

        } else if (action.type === 'ADD-DIALOG') {
            let newDialog: MyDialogItemType = {
                id: 1,
                message: this._state.dialogsPage.newDialogText

            }
            this._state.dialogsPage.dialogsData.push(newDialog)
            this._state.dialogsPage.newDialogText = ''
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE.NEW.DIALOG.TEXT') {
            this._state.dialogsPage.newDialogText = action.newDialog
            this._callSubscriber(this._state);
        }
    }


}

// let onChange = (state: AppStateTypeMinus) => {
//     console.log(state)
// }
// export let state = {
//     profilePage: {
//         myPostData: [
//             {message: "Hello how are you", countLikes: "1"},
//             {message: "Nice weather outside", countLikes: "15"}
//         ],
//         newPostText: ''
//     },
//     dialogsPage: {
//         messagesData: [
//             {id: 1, name: "Nikita"},
//             {id: 2, name: "Arkadi"},
//             {id: 3, name: "Egor"},
//             {id: 4, name: "Sika"},
//             {id: 5, name: "hgfhfgh"},
//             {id: 6, name: "Nikhfghgfhfgita"},
//             {id: 7, name: "Nikhfghfita"},
//         ],
//         dialogsData: [
//             {id: 1, message: "HI"},
//             {id: 1, message: "How is your day"},
//             {id: 1, message: "trololololo"},
//             {id: 1, message: "sdfsdfdsfsdfs"},
//         ],
//         newDialogText: ""
//     }
// }

// export const addPost = () => {
//
//     let newPost: MyPostDataItemType = {
//         message: state.profilePage.newPostText,
//         countLikes: "0"
//
//     }
//     state.profilePage.myPostData.push(newPost);
//     state.profilePage.newPostText = ''
//     onChange(state);
// }

// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText
//     onChange(state);
// }

// export const addDialog = () => {
//
//     let newDialog: MyDialogItemType = {
//         id: 1,
//         message: state.dialogsPage.newDialogText
//
//     }
//     state.dialogsPage.dialogsData.push(newDialog)
//     state.dialogsPage.newDialogText = ''
//     onChange(state);
// }

// export const updateNewDialogText = (newDialog: string) => {
//     state.dialogsPage.newDialogText = newDialog
//     onChange(state);
// }

// export const subscribe = (observer: (state: AppStateTypeMinus) => void) => {
// onChange = observer
// }