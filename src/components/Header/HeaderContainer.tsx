import React from "react"
import Header from "./Header"
import { getAuthUserData } from "redux/auth-reducer"
import { connect } from "react-redux"
import { AppStateType } from "redux/redux-store"

export type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

export type HeaderPropsType = mapStateToPropsType & {
    getAuthUserData: () => void
}

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        const props = this.props
        return <Header {...props} />
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer)
