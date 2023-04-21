import {ActionTypes} from './store';

let initialState = {
    myPostData: [
        {message: "Hello how are you", countLikes: "1"},
        {message: "Nice weather outside", countLikes: "15"}
    ] as Array<MyPostDataItemType>,
    newPostText: ''
}

export type MyPostDataItemType = {
    message: string
    countLikes: string
}

export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ActionTypes) => {

    switch (action.type) {
        case'ADD-POST':
            let newPost: MyPostDataItemType = {
                message: state.newPostText,
                countLikes: "0"
            }
            state.myPostData.push(newPost);
            state.newPostText = ''
            return state;
        case'UPDATE.NEW.POST.TEXT':
            state.newPostText = action.newText
            return state
        default:
            return state
    }
    // if (action.type === 'ADD-POST') {
    //     let newPost: MyPostDataItemType = {
    //         message: state.newPostText,
    //         countLikes: "0"
    //
    //     }
    //     state.myPostData.push(newPost);
    //     state.newPostText = ''
    //
    //
    // } else if (action.type === 'UPDATE.NEW.POST.TEXT') {
    //     state.newPostText = action.newText
    //
    //
    // }
    //
    // return state
}

// type AddPostActionType = {
//     type: 'ADD-POST'
// }

export type AddPostActionType = ReturnType<typeof addPostActionCreator>

// type UpdateNewTextActionType = {
//     type: 'UPDATE.NEW.POST.TEXT'
//     newText: string
// }

export type UpdateNewTextActionType = ReturnType<typeof UpdateNewTextActionCreator>

export const addPostActionCreator = () => ({type: 'ADD-POST'} as const)
export const UpdateNewTextActionCreator = (newText: string) => ({
    type: 'UPDATE.NEW.POST.TEXT',
    newText: newText
} as const)

export default profileReducer