import React, { ComponentType } from "react"
import { BrowserRouter, HashRouter, Redirect, Route, Switch, withRouter } from "react-router-dom"
import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import News from "./components/News/News"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import UsersContainer from "./components/Users/UsersContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import Login from "./Login/Login"
import { connect, Provider } from "react-redux"
import { compose } from "redux"
import { initializeApp } from "redux/app-reducer"
import store, { AppStateType } from "redux/redux-store"
import Preloader from "components/common/preloader/Preloader"
import { withSuspense } from "hoc/withSuspense"
import PageNotFound404 from "components/PageNotFound404/PageNotFound404"

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))

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
    catchAllUnhandledErrors = (event: PromiseRejectionEvent) => {
        alert("some error")
        console.log(event)
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
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
                    <Switch>
                        <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />
                        <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
                        <Route path="/news" render={() => <News />} />
                        <Route path="/music" render={() => <Music />} />
                        <Route path="/settings" render={() => <Settings />} />
                        <Route path="/users" render={() => <UsersContainer />} />
                        <Route path="/login" render={() => <Login />} />
                        <Route path="/404" render={() => <PageNotFound404 />} />
                        {/*<Route path="/*" render={() => <Redirect to={"/404"} />} />*/}
                        <Route exact path="/" render={() => <Redirect to={"/profile"} />} />
                        <Route path="/*" render={() => <Redirect to={"/404"} />} />
                    </Switch>
                </div>
            </div>
        )
    }
}

// export default compose<ComponentType>(withRouter, connect(mapStateToProps, { initializeApp }))(App)
let AppContainer = compose<ComponentType>(withRouter, connect(mapStateToProps, { initializeApp }))(App)

const SamuraiJsApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )
}

export default SamuraiJsApp

///test
