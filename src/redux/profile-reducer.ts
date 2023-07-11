import {Dispatch} from 'redux';
import {profileAPI, usersApi} from '../api/api';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

export type ProfileReducerBossType = AddPostActionType
    | UpdateNewTextActionType
    | SetUserActionType | SetStatusActionType


let initialState = {
    myPostData: [
        {message: "Hello how are you", countLikes: "1"},
        {message: "Nice weather outside", countLikes: "15"}
    ] as Array<MyPostDataItemType>,
    newPostText: '',
    profile: null,
    status: ''
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

        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }


        default:
            return state
    }
}


export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewTextActionType = ReturnType<typeof UpdateNewTextActionCreator>
export type SetUserActionType = ReturnType<typeof setUserProfileAC>
export type SetStatusActionType = ReturnType<typeof setStatus>

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const setUserProfileAC = (profile: any) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    usersApi.getProfile(userId)
        .then(response => {
            dispatch(setUserProfileAC(response.data))
        })
}

export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status))
                console.log('lololo')
            }

        })
}

export const UpdateNewTextActionCreator = (newText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
} as const)

export default profileReducer