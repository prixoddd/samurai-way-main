const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

export type ProfileReducerBossType = AddPostActionType | UpdateNewTextActionType | SetUserActionType


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

export const profileReducer = (state: InitialStateType = initialState, action: ProfileReducerBossType) => {

    switch (action.type) {
        case ADD_POST: {
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
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }

        case SET_USER_PROFILE:
            return {}
        default:
            return state
    }
}


export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewTextActionType = ReturnType<typeof UpdateNewTextActionCreator>
export type SetUserActionType = ReturnType<typeof setUserAC>

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const setUserAC = (profile: any) => ({type: SET_USER_PROFILE, profile} as const)
export const UpdateNewTextActionCreator = (newText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
} as const)

export default profileReducer