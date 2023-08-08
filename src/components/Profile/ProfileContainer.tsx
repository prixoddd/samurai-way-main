import React from "react"
import Profile from "./Profile"
import { connect } from "react-redux"
import { getStatus, getUserProfile, InitialStateType, updateStatus } from "redux/profile-reducer"
import { AppStateType } from "redux/redux-store"
import { RouteComponentProps, withRouter } from "react-router-dom"
import { compose } from "redux"

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

type PathParamsType = {
    userId: string
}
type mapStatePropsType = {
    profile: ProfileType
    status: string
    authorisedUserId: number | null
    isAuth: boolean
}

type mapDispatchPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

type MyPostsPropsType = mapStatePropsType & mapDispatchPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<MyPostsPropsType, InitialStateType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId && this.props.authorisedUserId) {
            userId = this.props.authorisedUserId.toString()
        }
        if (!userId) this.props.history.push("/login")

        this.props.getUserProfile(userId)

        // setTimeout(() => {
        this.props.getStatus(userId)
        // }, 1000)
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        )
    }
}

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorisedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer)
