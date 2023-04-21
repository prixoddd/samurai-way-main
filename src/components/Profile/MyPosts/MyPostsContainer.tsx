import React from 'react';
import {
    addPostActionCreator,
    MyPostDataItemType,
    UpdateNewTextActionCreator
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';

type mapStatePropsType = {
    posts: Array<MyPostDataItemType>
    newPostText: string
}

type mapDispatchToPropsType = {
    updateNewPostText: (text: any) =>  void
    addPost: () => void
}

export type MyPostsPropsType = mapStatePropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        posts: state.profilePage.myPostData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: any): mapDispatchToPropsType => {
    return {
        updateNewPostText: (text: any) => {
            dispatch(UpdateNewTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;