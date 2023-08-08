import React, { ComponentType } from "react"
import { Route, withRouter } from "react-router-dom"
import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import News from "./components/News/News"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import UsersContainer from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import Login from "./Login/Login"
import { connect } from "react-redux"
import { compose } from "redux"
import { initializeApp } from "redux/app-reducer"
import { AppStateType } from "redux/redux-store"
import Preloader from "components/common/preloader/Preloader"

export type DialogsItemsDataPropsType = {
    name: string
    id: number
}
export type DialogsMessagesDataPropsType = {
    message: string
    id: number
}
export type ProfilePostDataPropsType = {
    message: string
    countLikes: string
}

type AppProps = {
    initializeApp: () => void
    initialized: boolean
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized,
    }
}

class App extends React.Component<AppProps> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <NavBar />
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                    <Route path="/dialogs" render={() => <DialogsContainer />} />
                    <Route path="/news" render={() => <News />} />
                    <Route path="/music" render={() => <Music />} />
                    <Route path="/settings" render={() => <Settings />} />
                    <Route path="/users" render={() => <UsersContainer />} />
                    <Route path="/login" render={() => <Login />} />
                </div>
            </div>
        )
    }
}

export default compose<ComponentType>(withRouter, connect(mapStateToProps, { initializeApp }))(App)
