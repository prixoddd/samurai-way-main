import React from 'react';
import s from "./MyPosts.module.css";
import MyPost from "./Post/MyPost";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <MyPost message="Hellow how are you" countLikes="1"/>
                <MyPost message="Nice weather outside" countLikes="15"/>
            </div>
        </div>


    );
};

export default MyPosts;