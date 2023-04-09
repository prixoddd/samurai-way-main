import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePostDataPropsType} from '../../App';

export type ProfilePropsType = {
    profilePage: {
        myPostData: Array<ProfilePostDataPropsType>,
        newPostText: string
    }
    addPost: () => void
    updateNewPostText: (s: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <>
            <ProfileInfo />
            <MyPosts addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
                     posts={props.profilePage.myPostData}
                     newPostText={props.profilePage.newPostText}/>
        </>

    );
};

export default Profile;