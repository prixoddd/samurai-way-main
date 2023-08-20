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
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {/*<Field placeholder={"Email"} name={"email"} component={Input} validate={requiredField} />*/}
            {createField("Email", "email", requiredField, Input)}
            {createField("Password", "password", requiredField, Input, { type: "password" })}
            {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}
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

const LoginReduxForm = reduxForm<FormDataType>({ form: "login" })(LoginForm)

const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { getAuthUserData, login })(Login)
