import React, { useRef, useState } from "react"
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/preloader/Preloader"
import { ProfilePropsType } from "../Profile"
import ProfileStatusWithHooks from "components/Profile/ProfileInfo/ProfileStatusWithHooks"
import mainPhoto from "../../../assets/img/mainUser.png"

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }: ProfilePropsType) => {
    const [photo, setPhoto] = useState(1)

    const buttonCleaner = () => {
        if (inputFile.current) {
            inputFile.current.value = ""
            inputFile.current.type = "text"
            inputFile.current.type = "file"
        }
    }

    const inputFile = useRef<HTMLInputElement | null>(null)

    if (!profile) {
        return <Preloader />
    }

    const ButtonHandler = () => {
        savePhoto(photo).finally(() => {
            buttonCleaner()
        })
    }

    const MainPhotoSelectedOn = (e: any) => {
        debugger
        if (e.target.files.length) {
            setPhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos ? profile.photos.large : mainPhoto} alt="" className={s.mainPhoto} />
                {/*<img src={mainPhoto} alt="" className={s.mainPhoto} />*/}
                {isOwner && (
                    <div>
                        <input type={"file"} onChange={MainPhotoSelectedOn} ref={inputFile} />
                        <button disabled={photo === 1} onClick={ButtonHandler}>
                            Submit
                        </button>
                    </div>
                )}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                {profile.fullName}
            </div>
        </div>
    )
}
export default ProfileInfo
