import React from "react"
import { InjectedFormProps, reduxForm } from "redux-form"
import { createField, Input } from "components/common/FormsControls/FormsControls"
import { requiredField } from "utils/validators/validators"
import { connect } from "react-redux"
import { getAuthUserData, login } from "redux/auth-reducer"
import { Redirect } from "react-router-dom"
import { AppStateType } from "redux/redux-store"
import s from "components/common/FormsControls/FormsControls.module.sass"

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

type PropsType = {
    captchaUrl: string
}
//
// type BossType = InjectedFormProps<FormDataType> & PropsType

const LoginForm: React.FC<InjectedFormProps<FormDataType, PropsType> & PropsType> = ({
    handleSubmit,
    error,
    captchaUrl,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            {/*<Field placeholder={"Email"} name={"email"} component={Input} validate={requiredField} />*/}
            {createField("Email", "email", requiredField, Input)}
            {createField("Password", "password", requiredField, Input, { type: "password" })}
            {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}

            {captchaUrl && <img src={captchaUrl} alt="" />}
            {captchaUrl && createField("Symbols from image", "captcha", requiredField, Input)}

            {/*<Field*/}
            {/*    placeholder={"Password"}*/}
            {/*    name={"password"}*/}
            {/*    type={"password"}*/}
            {/*    component={Input}*/}
            {/*    validate={requiredField}*/}
            {/*/>*/}
            {/*<div>*/}
            {/*    <Field type="checkbox" name="rememberMe" component={Input} /> remember me*/}
            {/*</div>*/}
            {error && <div className={s.formSummaryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType, PropsType>({ form: "login" })(LoginForm)

const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, { getAuthUserData, login })(Login)
