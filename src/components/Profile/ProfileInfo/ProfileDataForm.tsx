import React from "react"
import { ProfileDataPropsType } from "components/Profile/ProfileInfo/ProfileInfo"
import { createField, Input, Textarea } from "components/common/FormsControls/FormsControls"
import { reduxForm } from "redux-form"
import s from "components/common/FormsControls/FormsControls.module.sass"

type ProfileFormData = {
    fullName: string
}

const ProfileDataForm = ({ profile, handleSubmit, error }: ProfileDataPropsType) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save</button>
            </div>
            {error && <div className={s.formSummaryError}>{error}</div>}
            <div>
                <b>Full Name</b>: {createField("Full name", "fullName", [], Input)}
            </div>
            <div>
                <b>Looking for a job</b>: {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
            </div>
            <div>
                <b>My professional skills</b>:{" "}
                {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
            </div>
            <div>
                <b>About me</b>: {createField("About me", "aboutMe", [], Textarea)}
            </div>

            <div>
                <b>Contacts</b>:
                {profile.contacts &&
                    Object.entries(profile?.contacts).map(([key]) => {
                        return (
                            <div key={key}>
                                <b>{key}</b>: {createField(key, "contacts." + key, [], Input)}
                            </div>
                        )
                    })}
            </div>
        </form>
    )
}
const ProfileDataFormReduxForm = reduxForm<ProfileFormData, ProfileDataPropsType>({ form: "edit-profile" })(
    ProfileDataForm,
)

export default ProfileDataFormReduxForm
