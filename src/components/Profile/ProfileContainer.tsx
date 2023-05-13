import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {InitialStateType, setUserProfileAC} from '../../redux/profile-reducer';
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
    setUserProfileAC: (profile: ProfileType) => void
}

type MyPostsPropsType = mapStatePropsType & mapDispatchPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<MyPostsPropsType, InitialStateType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfileAC(response.data)
            })
    }

    render() {
        return (
            <>
                {/*<Profile profile={this.props.profile}/>*/}
                <Profile {...this.props} profile={this.props.profile}/>
            </>

        );
    }
}

let mapStateToProps = (state: AppStateType): mapStatePropsType  => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {setUserProfileAC})(WithUrlDataContainerComponent);