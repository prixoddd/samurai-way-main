import React from 'react';
import s from "./MyPosts.module.css";
import MyPost from "./Post/MyPost";

const MyPosts = () => {
    return (
        <div>
            <div className={s.post}>
                <MyPost message="Hellow how are you" countLikes="1"/>
                <MyPost message="Nice weather outside" countLikes="15"/>
            </div>
        </div>


    );
};

export default MyPosts;