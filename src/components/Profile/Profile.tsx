import React from "react"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import { ProfileType } from "./ProfileContainer"

export type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer />
        </>
    )
}

export default Profile
