import React from 'react';
import s from "./MyPosts.module.css";
import MyPost from "./Post/MyPost";

import {ProfilePostDataPropsType} from '../../../App';
import {ActionTypes} from '../../../redux/store';
import {addPostActionCreator, UpdateNewTextActionCreator} from '../../../redux/profile-reducer';


export type MyPostsPropsType = {
    posts: Array<ProfilePostDataPropsType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (s: string) => void
    // dispatch: (action: ActionTypes) => void
}



const MyPosts = (props: MyPostsPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.addPost()
        // debugger
        // props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            // props.dispatch(UpdateNewTextActionCreator(newPostElement.current?.value))
            props.updateNewPostText(newPostElement.current?.value)
        }

    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.posts.map((el,index) => <MyPost message={el.message} countLikes={el.countLikes} key={index}/>)}
                {/*{props.posts}*/}
                {/*{props.posts.map(el => el.message)}*/}

            </div>
        </div>


    );
};

export default MyPosts;