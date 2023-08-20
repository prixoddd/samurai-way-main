import { authAPI } from "api/api"
import { Dispatch } from "redux"
import { AppDispatch, AppThunk } from "redux/redux-store"
import { stopSubmit } from "redux-form"

const SET_USER_DATA = "SET_USER_DATA"

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type BossActionType = setUserDataActionType

export const authReducer = (state: InitialStateType = initialState, action: BossActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export type setUserDataActionType = ReturnType<typeof setUserDataAC>

export const setUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } }) as const

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me()

    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data
        dispatch(setUserDataAC(id, email, login, true))
    }
}

export const login =
    (email: string, password: string, rememberMe: boolean): AppThunk =>
    async (dispatch: AppDispatch) => {
        let response = await authAPI.login(email, password, rememberMe)

        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            dispatch(stopSubmit("login", { _error: message }))
        }
    }

export const logout = (): AppThunk => async (dispatch: AppDispatch) => {
    let response = await authAPI.logOut()

    if (response.data.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false))
    }
}
