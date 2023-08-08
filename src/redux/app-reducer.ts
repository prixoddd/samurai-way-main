import { getAuthUserData } from "redux/auth-reducer"
import { AppDispatch, AppThunk } from "redux/redux-store"

const SET_INITIALIZED_SUCCEED = "SET_INITIALIZED_SUCCEED"

let initialState = {
    initialized: false,
}

type InitialStateType = {
    initialized: boolean
}

type BossActionType = setUserDataActionType

export const appReducer = (state: InitialStateType = initialState, action: BossActionType) => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCEED:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

export type setUserDataActionType = ReturnType<typeof initializedSucceed>

export const initializedSucceed = () => ({ type: SET_INITIALIZED_SUCCEED })

export const initializeApp: AppThunk = () => (dispatch: AppDispatch) => {
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(initializedSucceed())
    })
}
