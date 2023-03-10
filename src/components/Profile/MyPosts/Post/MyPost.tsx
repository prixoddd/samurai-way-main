import React from 'react';
import s from "./MyPost.module.css";

type MypostPropsType = {
    message: string
}


const MyPost = (props:MypostPropsType) => {
    return (
            <div className={s.item}>
                <img src="https://pyxis.nymag.com/v1/imgs/51b/28a/622789406b8850203e2637d657d5a0e0c3-avatar-rerelease.rsquare.w700.jpg" alt="Avatar"/>
                {props.message}
                <div>
                    <span>Like</span>
                </div>
            </div>
        
    );
};

export default MyPost;