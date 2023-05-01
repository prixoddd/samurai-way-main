import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {followAC, MyPostDataItemType, setUsersAC, unfollowAC} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';

export type mapStateToPropsType = {
    users: Array<MyPostDataItemType>
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<MyPostDataItemType>) => void
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch:any): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<MyPostDataItemType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users);