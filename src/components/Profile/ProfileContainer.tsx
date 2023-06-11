import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, InitialStateType} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';

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
}

type mapDispatchPropsType = {
    getUserProfile: (userId: string) => void
}

type MyPostsPropsType = mapStatePropsType & mapDispatchPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<MyPostsPropsType, InitialStateType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state: AppStateType): mapStatePropsType  => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);