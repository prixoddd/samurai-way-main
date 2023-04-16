import React from 'react';
import s from "./MyPosts.module.css";
import MyPost from "./Post/MyPost";

import {ProfilePostDataPropsType} from '../../../App';
import {ActionTypes} from '../../../redux/store';
import {addPostActionCreator, UpdateNewTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


export type MyPostsPropsType = {
    posts: Array<ProfilePostDataPropsType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (s: string) => void
    dispatch: (action: ActionTypes) => void
}



const MyPostsContainer = (props: any) => {

    let state = props.store.getState().profilePage

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        // props.addPost()
        // debugger
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text: string) => {

            props.store.dispatch(UpdateNewTextActionCreator(text))
            // props.updateNewPostText(newPostElement.current?.value)


    }

    return <MyPosts posts={state.myPostData}
                    addPost={addPost}
                    updateNewPostText={onPostChange}
                    newPostText={state.newPostText}
    />
};

export default MyPostsContainer;