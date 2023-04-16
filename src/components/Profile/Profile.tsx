import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePostDataPropsType} from '../../App';
import {ActionTypes} from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';


export type ProfilePropsType = {
    profilePage: {
        myPostData: Array<ProfilePostDataPropsType>,
        newPostText: string
    }
    addPost: () => void
    updateNewPostText: (s: string) => void
    dispatch: (action: ActionTypes) => void
}

const Profile = (props: any) => {
    return (
        <>
            <ProfileInfo/>
            <MyPostsContainer
                // store={props.store}
                // addPost={props.addPost}
                // updateNewPostText={props.updateNewPostText}
                // dispatch={props.dispatch}
                // posts={props.profilePage.myPostData}
                // newPostText={props.profilePage.newPostText}
            />
        </>

    );
};

export default Profile;