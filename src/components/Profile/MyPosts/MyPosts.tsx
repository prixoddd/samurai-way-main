import React from 'react';
import s from "./MyPosts.module.css";
import MyPost from "./Post/MyPost";
import {ProfilePropsType} from '../Profile';

const MyPosts = (props: ProfilePropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current?.value)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.state.myPostData.map(el => <MyPost message={el.message} countLikes={el.countLikes}/>
                )}
            </div>
        </div>


    );
};

export default MyPosts;