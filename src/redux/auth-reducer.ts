import { authAPI, securityAPI } from "api/api"
import { Dispatch } from "redux"
import { AppDispatch, AppThunk } from "redux/redux-store"
import { stopSubmit } from "redux-form"

const SET_USER_DATA = "SET_USER_DATA"
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS"

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
}

type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
}

type BossActionType = setUserDataActionType | getCaptchaUrlSuccessActionType

export const authReducer = (state: InitialStateType = initialState, action: BossActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.captchaUrl,
            }
        default:
            return state
    }
}

export type setUserDataActionType = ReturnType<typeof setUserDataAC>
export type getCaptchaUrlSuccessActionType = ReturnType<typeof getCaptchaUrlSuccess>

export const getCaptchaUrlSuccess = (captchaUrl: string) => ({ type: GET_CAPTCHA_URL_SUCCESS, captchaUrl }) as const

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
    (email: string, password: string, rememberMe: boolean, captcha: string): AppThunk =>
    async (dispatch: AppDispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha)

        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }

            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            dispatch(stopSubmit("login", { _error: message }))
        }
    }

export const getCaptchaUrl = (): AppThunk => async (dispatch: AppDispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = (): AppThunk => async (dispatch: AppDispatch) => {
    let response = await authAPI.logOut()

    if (response.data.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false))
    }
}
