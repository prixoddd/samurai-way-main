import { AnyAction, applyMiddleware, combineReducers, createStore } from "redux"
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import { usersReducer } from "./users-reducer"
import { authReducer } from "./auth-reducer"
import thunkMiddleware, { ThunkAction, ThunkDispatch } from "redux-thunk"
import { reducer as formReducer } from "redux-form"
import { appReducer } from "redux/app-reducer"
import { composeWithDevTools } from "redux-devtools-extension"

type ReducersType = typeof rootReducer
export type AppStateType = ReturnType<ReducersType>
// export type ReduxStoreType = Store<AppStateType>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AnyAction>
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AnyAction>

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

// @ts-ignore
window.store = store

export default store
