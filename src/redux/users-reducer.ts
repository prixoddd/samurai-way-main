

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
    users: [] as Array<MyPostDataItemType>,
}

export type MyPostDataItemType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: { city: string, country: string }

}

export type InitialStateType = typeof initialState
type BossActionType = FollowActionType
    | UnfollowActionType
    | SetUsersActionType

export const usersReducer = (state: InitialStateType = initialState, action: BossActionType) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)
            }
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}


export type FollowActionType = ReturnType<typeof followAC>
export type UnfollowActionType = ReturnType<typeof unfollowAC>
export type SetUsersActionType = ReturnType<typeof setUsersAC>

// export type UpdateNewTextActionType = ReturnType<typeof UpdateNewTextActionCreator>

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<MyPostDataItemType>) => ({type: SET_USERS, users} as const)

// export const UpdateNewTextActionCreator = (newText: string) => ({
//     type: 'UPDATE.NEW.POST.TEXT',
//     newText: newText
// } as const)
