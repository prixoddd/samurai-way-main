import React from "react"
import { mapStateToPropsType } from "./UsersContainer"
import Paginator from "components/common/Paginator/Paginator"
import User from "components/Users/User"

type UsersPropsType = mapStateToPropsType & {
    onPageChanged: (p: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    isFetching?: boolean
}

const Users = (props: UsersPropsType) => {
    return (
        <div>
            <Paginator
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
            />

            {props.users.map((wl: any) => (
                <User
                    user={wl}
                    followingInProgress={props.followingInProgress}
                    key={wl.id}
                    unfollow={props.unfollow}
                    follow={props.follow}
                />
            ))}
        </div>
    )
}

export default Users
