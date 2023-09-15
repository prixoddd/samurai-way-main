import React, { useRef, useState } from "react"
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/preloader/Preloader"
import { ProfilePropsType } from "../Profile"
import ProfileStatusWithHooks from "components/Profile/ProfileInfo/ProfileStatusWithHooks"
import mainPhoto from "../../../assets/img/mainUser.png"
import { ProfileType } from "components/Profile/ProfileContainer"
import ProfileDataForm from "components/Profile/ProfileInfo/ProfileDataForm"

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }: ProfilePropsType) => {
    const [photo, setPhoto] = useState(1)
    const [editMode, setEditMode] = useState(false)

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

    const onSubmit = (formData: any) => {
        saveProfile(formData).then(() => setEditMode(false))
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
                {editMode ? (
                    <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                ) : (
                    <ProfileData
                        goToEditMode={() => setEditMode(true)}
                        profile={profile}
                        isOwner={isOwner}
                    ></ProfileData>
                )}

                <div>
                    <b>Status</b>: <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                </div>
            </div>
        </div>
    )
}

type ContactProps = {
    contactTitle: string
    contactValue: string | null
}

export type ProfileDataPropsType = {
    profile: ProfileType
    isOwner?: boolean
    error?: string
    goToEditMode?: () => void
    handleSubmit?: () => void
}

const ProfileData = ({ profile, isOwner, goToEditMode }: ProfileDataPropsType) => {
    return (
        <div>
            {isOwner && (
                <div>
                    <button onClick={goToEditMode}>edit</button>
                </div>
            )}
            <div>
                <b>Full Name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? "Yes" : "No"}
            </div>
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>

            <div>
                <b>Contacts</b>:
                {profile.contacts &&
                    Object.entries(profile?.contacts).map(([key, value]) => {
                        return <Contact key={key} contactTitle={key} contactValue={value} />
                    })}
            </div>
        </div>
    )
}

export const Contact: React.FC<ContactProps> = ({ contactTitle, contactValue }) => {
    return (
        <div>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

export default ProfileInfo
