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
        case'ADD-POST': {
            let newPost: MyPostDataItemType = {
                message: state.newPostText,
                countLikes: "0"
            }
            return {
                ...state,
                newPostText: '',
                myPostData: [...state.myPostData, newPost]
            }
        }
        case'UPDATE.NEW.POST.TEXT': {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state
    }
}


export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewTextActionType = ReturnType<typeof UpdateNewTextActionCreator>

export const addPostActionCreator = () => ({type: 'ADD-POST'} as const)
export const UpdateNewTextActionCreator = (newText: string) => ({
    type: 'UPDATE.NEW.POST.TEXT',
    newText: newText
} as const)

export default profileReducer