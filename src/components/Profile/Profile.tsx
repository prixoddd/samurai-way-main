import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePostDataPropsType} from '../../App';

export type ProfilePropsType = {
    state: {
        myPostData: Array<ProfilePostDataPropsType>
    }
    addPost: (s: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <>
            <ProfileInfo />
            <MyPosts addPost={props.addPost} state={props.state}/>
        </>

    );
};

export default Profile;