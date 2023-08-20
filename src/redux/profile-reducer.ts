import { Dispatch } from "redux"
import { profileAPI, usersApi } from "api/api"
import { v1 } from "uuid"

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const DELETE_POST = "DELETE_POST"

export type ProfileReducerBossType = AddPostActionType | SetUserActionType | SetStatusActionType | deletePostActionType

let initialState = {
    myPostData: [
        { message: "Hello how are you", countLikes: "1", id: "1" },
        { message: "bruuh", countLikes: "4", id: v1() },
        { message: "Nice weather outside", countLikes: "15", id: v1() },
    ] as Array<MyPostDataItemType>,
    profile: null,
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

        default:
            return state
    }
}

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type SetUserActionType = ReturnType<typeof setUserProfileAC>
export type SetStatusActionType = ReturnType<typeof setStatus>
export type deletePostActionType = ReturnType<typeof deletePost>

export const addPostActionCreator = (newPostText: string) => ({ type: ADD_POST, newPostText }) as const
export const setUserProfileAC = (profile: any) => ({ type: SET_USER_PROFILE, profile }) as const
export const setStatus = (status: string) => ({ type: SET_STATUS, status }) as const
export const deletePost = (postId: string) => ({ type: DELETE_POST, postId }) as const

export const getUserProfile = (userId: string) => async (dispatch: Dispatch) => {
    const response = await usersApi.getProfile(userId)
    dispatch(setUserProfileAC(response.data))
}

export const getStatus = (userId: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
        console.log("lololo")
    }
}

export default profileReducer
