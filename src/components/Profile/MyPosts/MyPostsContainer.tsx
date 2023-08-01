import React from "react"
import { addPostActionCreator, MyPostDataItemType } from "redux/profile-reducer"
import MyPosts from "./MyPosts"
import { connect } from "react-redux"
import { AppStateType } from "redux/redux-store"

type mapStatePropsType = {
    posts: Array<MyPostDataItemType>
}

type mapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

export type MyPostsPropsType = mapStatePropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        posts: state.profilePage.myPostData,
    }
}

const mapDispatchToProps = (dispatch: any): mapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
