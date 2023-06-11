import {usersApi} from '../api/api';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLlOWING_PROGRESS = 'TOGGLE_IS_FOLlOWING_PROGRESS'

let initialState = {
    users: [] as Array<MyPostDataItemType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
}

// let initialState = {
//     users: [] as Array<MyPostDataItemType>,
//     pageSize: null,
//     totalUsersCount: null,
//     currentPage: null,
//     isFetching: undefined
// }
//
// type InitialStateType = {
//     users: Array<MyPostDataItemType>,
//     pageSize: null | number,
//     totalUsersCount: null | number,
//     currentPage: null | number,
//     isFetching: boolean | undefined
// }

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
    | setCurrentPageActionType
    | setTotalUsersCountActionType
    | isFetchingActionType
    | ToggleFollowingInProgressActionType

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
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLlOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}


export type FollowActionType = ReturnType<typeof followSuccess>
export type UnfollowActionType = ReturnType<typeof unfollowSuccess>
export type SetUsersActionType = ReturnType<typeof setUsersAC>
export type setCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>
export type isFetchingActionType = ReturnType<typeof setIsFetchingAC>
export type ToggleFollowingInProgressActionType = ReturnType<typeof toggleFollowingInProgress>

// export type UpdateNewTextActionType = ReturnType<typeof UpdateNewTextActionCreator>

export const followSuccess = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<MyPostDataItemType>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCountAC = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount} as const)
export const setIsFetchingAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingInProgress = (followingInProgress: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLlOWING_PROGRESS,
    followingInProgress,
    userId
} as const)

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(setIsFetchingAC(true))

        usersApi.getUsers(currentPage, pageSize).then(data => {
            dispatch(setIsFetchingAC(false))
            dispatch(setUsersAC(data.items))
            dispatch(setTotalUsersCountAC(data.totalCount))
        })
    }
}

export const follow = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingInProgress(true, userId))
        usersApi.follow(userId).then(data => {
            if (data.resultCode == 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingInProgress(false, userId))
        })
    }
}

export const unfollow = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingInProgress(true, userId))
        usersApi.unfollow(userId).then(data => {
            if (data.resultCode == 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingInProgress(false, userId))
        })
    }
}

