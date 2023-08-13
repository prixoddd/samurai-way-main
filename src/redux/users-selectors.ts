import { AppStateType } from "redux/redux-store"
import { createSelector } from "reselect"

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users
}

// export const getUsersSelector = (state: AppStateType) => {
//     return getUsers(state).filter((u) => true)
// }

export const getUsersSuper = createSelector(getUsers, (users) => {
    return users.filter((u) => u.id > 1)
})

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
