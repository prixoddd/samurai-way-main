import { profileAPI, usersApi } from "api/api"
import { v1 } from "uuid"
import { AppDispatch, AppStateType, AppThunk } from "redux/redux-store"
import { stopSubmit } from "redux-form"

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const DELETE_POST = "DELETE_POST"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"

export type ProfileReducerBossType =
    | AddPostActionType
    | SetUserActionType
    | SetStatusActionType
    | deletePostActionType
    | savePhotoSuccessActionType

let initialState = {
    myPostData: [
        { message: "Hello how are you", countLikes: "1", id: "1" },
        { message: "bruuh", countLikes: "4", id: v1() },
        { message: "Nice weather outside", countLikes: "15", id: v1() },
    ] as Array<MyPostDataItemType>,
    profile: {},
    status: "",
}

export type MyPostDataItemType = {
    message: string
    countLikes: string
    id: string
}

export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ProfileReducerBossType) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: MyPostDataItemType = {
                message: action.newPostText,
                countLikes: "0",
                id: v1(),
            }
            return {
                ...state,
                myPostData: [...state.myPostData, newPost],
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        case "DELETE_POST": {
            return {
                ...state,
                myPostData: state.myPostData.filter((p) => p.id !== action.postId),
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,

                profile: { ...state.profile, photos: action.newPhoto },
            }
        }

        default:
            return state
    }
}

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type SetUserActionType = ReturnType<typeof setUserProfileAC>
export type SetStatusActionType = ReturnType<typeof setStatus>
export type deletePostActionType = ReturnType<typeof deletePost>
export type savePhotoSuccessActionType = ReturnType<typeof savePhotoSuccess>

export const addPostActionCreator = (newPostText: string) => ({ type: ADD_POST, newPostText }) as const
export const setUserProfileAC = (profile: any) => ({ type: SET_USER_PROFILE, profile }) as const
export const setStatus = (status: string) => ({ type: SET_STATUS, status }) as const
export const deletePost = (postId: string) => ({ type: DELETE_POST, postId }) as const
export const savePhotoSuccess = (newPhoto: string) => ({ type: SAVE_PHOTO_SUCCESS, newPhoto }) as const

export const getUserProfile =
    (userId: string): AppThunk =>
    async (dispatch: AppDispatch) => {
        const response = await usersApi.getProfile(userId)
        dispatch(setUserProfileAC(response.data))
    }

export const getStatus =
    (userId: string): AppThunk =>
    async (dispatch: AppDispatch) => {
        const response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
    }

export const updateStatus =
    (status: string): AppThunk =>
    async (dispatch: AppDispatch) => {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
            console.log("lololo")
        }
    }

export const saveUserPhoto =
    (photo: any): AppThunk =>
    async (dispatch: AppDispatch) => {
        const response = await profileAPI.updatePhoto(photo)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))

            console.log("photo is successfully changed")
        }
        return response
    }

export const saveProfile =
    (profile: any): AppThunk =>
    async (dispatch: AppDispatch, getState: () => AppStateType) => {
        const userId = getState().auth.id

        const response = await profileAPI.saveProfile(profile)

        if (response.data.resultCode === 0 && userId) {
            dispatch(getUserProfile(userId.toString()))
        } else {
            const text = response.data.messages[0]
            const regex = /\(([^->]+)->([^)]+)\)/
            const match = text.match(regex)
            const firstString = match[1].trim().toLowerCase()
            const secondString = match[2].trim().toLowerCase()
            // dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }))
            dispatch(stopSubmit("edit-profile", { [firstString]: { [secondString]: response.data.messages[0] } }))
            return Promise.reject()
        }
        // let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
    }

export default profileReducer
