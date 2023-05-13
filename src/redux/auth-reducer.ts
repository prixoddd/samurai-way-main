const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: true
}

type InitialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

// export type InitialStateType = typeof initialState

type BossActionType = setUserDataActionType

export const authReducer = (state: InitialStateType = initialState, action: BossActionType) => {

    switch (action.type) {
        case SET_USER_DATA:
            // debugger
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

