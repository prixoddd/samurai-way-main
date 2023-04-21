import React from 'react';
import {addPostActionCreator, UpdateNewTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';


const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().profilePage

                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let onPostChange = (text: string) => {
                    store.dispatch(UpdateNewTextActionCreator(text))
                }

                return <MyPosts posts={state.myPostData}
                                addPost={addPost}
                                updateNewPostText={onPostChange}
                                newPostText={state.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    )
};

export default MyPostsContainer;