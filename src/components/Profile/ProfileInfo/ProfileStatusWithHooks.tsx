import React, { ChangeEvent, useEffect, useState } from "react"

type propsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: propsType) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateMode = () => {
        setEditMode(true)
    }

    const diactivateMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode && (
                <div>
                    <span onDoubleClick={activateMode}>{props.status}</span>
                </div>
            )}
            {editMode && (
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={diactivateMode} value={status}></input>
                </div>
            )}
        </div>
    )
}

export default ProfileStatusWithHooks
