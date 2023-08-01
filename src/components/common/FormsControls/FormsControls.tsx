import React from "react"
import s from "../FormsControls/FormsControls.module.sass"

type PropsType = {
    input: any
    meta: any
}

export const FormControl: React.FC<PropsType> = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>{props.children}</div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea: React.FC<PropsType> = ({ input, meta, ...props }) => {
    return (
        <FormControl {...{ input, meta, ...props }}>
            <textarea {...input} {...props} />
        </FormControl>
    )
}

export const Input: React.FC<PropsType> = ({ input, meta, ...props }) => {
    return (
        <FormControl {...{ input, meta, ...props }}>
            <input {...input} {...props} />
        </FormControl>
    )
}
