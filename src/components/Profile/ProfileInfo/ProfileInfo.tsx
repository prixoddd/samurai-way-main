import React from "react"
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/preloader/Preloader"
import { ProfilePropsType } from "../Profile"
import ProfileStatusWithHooks from "components/Profile/ProfileInfo/ProfileStatusWithHooks"

const ProfileInfo = ({ profile, status, updateStatus }: ProfilePropsType) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.small} alt="" />
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                {profile.fullName}
            </div>
        </div>
    )
}
export default ProfileInfo
