import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';

class ProfileContainer extends React.Component<any, any>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setTotalUsers(response.data)
            })
    }

    render() {
        return (
            <>
                <Profile />
                {/*<Profile {...this.props} />*/}
            </>

        );
    }
};

let mapStateToProps = () => {

}

export default connect(mapStateToProps, {}) ProfileContainer;