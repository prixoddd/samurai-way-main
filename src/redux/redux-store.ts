import { applyMiddleware, combineReducers, createStore } from "redux"
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import { usersReducer } from "./users-reducer"
import { authReducer } from "./auth-reducer"
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from "redux-form"

type ReducersType = typeof rootReducer
export type AppStateType = ReturnType<ReducersType>
// export type ReduxStoreType = Store<AppStateType>

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// window.store = store;

export default store
