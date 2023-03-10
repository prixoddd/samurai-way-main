import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (

        <div className={s.content}>
            <div>
                <img
                    src="https://st.depositphotos.com/1179847/1835/i/600/depositphotos_18351001-stock-photo-island-in-the-maldives.jpg"
                    alt="beach"/>
            </div>
            <MyPosts />
        </div>

    );
};

export default Profile;