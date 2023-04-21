import React from 'react';
import s from "./MyPosts.module.css";
import MyPost from "./Post/MyPost";
import { MyPostsPropsType } from './MyPostsContainer';

const MyPosts = (props: MyPostsPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        if (newPostElement.current) {
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
            </div>
        </div>


    );
};

export default MyPosts;