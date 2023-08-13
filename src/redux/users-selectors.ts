import { AppStateType } from "redux/redux-store"

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users
}

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getisFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getfollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}
