import React from 'react';
import {connect} from 'react-redux';
import {
    MyPostDataItemType,
    setCurrentPage,
    toggleFollowingInProgress, getUsersThunkCreator, follow, unfollow
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


export type mapStateToPropsType = {
    users: Array<MyPostDataItemType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingInProgress: (followingInProgress: boolean, userId: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType


class UsersContainer extends React.Component<MyPostsPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }


    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   isFetching={this.props.isFetching}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const mmm = {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingInProgress,
    getUsersThunkCreator
}

// let AuthRedirectComponent = WithAuthRedirect(UsersContainer)

// export default WithAuthRedirect(connect(mapStateToProps, mmm) (UsersContainer));

export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, mmm)
)(UsersContainer)