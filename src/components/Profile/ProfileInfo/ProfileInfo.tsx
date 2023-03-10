import React from 'react';
import MyPosts from "../MyPosts/MyPosts";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img
                    src="https://st.depositphotos.com/1179847/1835/i/600/depositphotos_18351001-stock-photo-island-in-the-maldives.jpg"
                    alt="beach"/>
            </div>
            <div className={s.descriptionBlock}>
                <MyPosts />
            </div>

        </div>
    );
};

export default ProfileInfo;