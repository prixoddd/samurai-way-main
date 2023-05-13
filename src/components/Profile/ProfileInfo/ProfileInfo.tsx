import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/Preloader';
import {ProfilePropsType} from '../Profile';

const ProfileInfo = (props: ProfilePropsType) => {
    if(!props.profile) {
        return <Preloader/>
    }
return (

    <div>
        <div>
            <img
                src="https://st.depositphotos.com/1179847/1835/i/600/depositphotos_18351001-stock-photo-island-in-the-maldives.jpg"
                alt="beach"/>
        </div>
        <div className={s.descriptionBlock}>

            <img src={props.profile.photos.small} alt=""/>
            {props.profile.fullName}
        </div>

    </div>
);
}
;

export default ProfileInfo;