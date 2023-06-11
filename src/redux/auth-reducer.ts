import {Dispatch} from 'redux';
import {authAPI} from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

type InitialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

type BossActionType = setUserDataActionType

export const authReducer = (state: InitialStateType = initialState, action: BossActionType) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
        }
        default:
            return state
    }
}

export type setUserDataActionType = ReturnType<typeof setUserDataAC>

export const setUserDataAC = (id: number, email: string, login: string) => ({type: SET_USER_DATA, data: {id, email, login}} as const)
export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if(response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setUserDataAC(id, email, login))
            }
        })
}

