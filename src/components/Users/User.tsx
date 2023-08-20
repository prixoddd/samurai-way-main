import React from "react"
import styles from "./users.module.css"
import userPhoto from "../../assets/img/noUser.png"
import { NavLink } from "react-router-dom"
import { MyPostDataItemType } from "redux/users-reducer"

type UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
    key: number
} & { user: MyPostDataItemType }

const User = ({ user, followingInProgress, unfollow, follow }: UsersPropsType) => {
    let wl = user

    return (
        <div>
            <span>
                <div>
                    <NavLink to={"/profile/" + wl.id}>
                        <img
                            src={wl.photos.small != null ? wl.photos.small : userPhoto}
                            className={styles.userPhoto}
                            alt="blabla"
                        />
                    </NavLink>
                </div>
                <div>
                    {wl.followed ? (
                        <button
                            disabled={followingInProgress.some((id) => id === wl.id)}
                            onClick={() => {
                                unfollow(wl.id)
                            }}
                        >
                            Unfollow
                        </button>
                    ) : (
                        <button
                            disabled={followingInProgress.some((id) => id === wl.id)}
                            onClick={() => {
                                follow(wl.id)
                            }}
                        >
                            Follow
                        </button>
                    )}
                </div>
            </span>
            <span>
                <div>{wl.name}</div>
                <div>{wl.status}</div>
            </span>
            <span>
                <div>{"wl.location.country"}</div>
                <div>{"wl.location.city"}</div>
            </span>
        </div>
    )
}

export default User
