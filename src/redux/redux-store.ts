import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import {usersReducer} from './users-reducer';

type ReducersType = typeof rootReducer
export type AppStateType = ReturnType<ReducersType>
// export type ReduxStoreType = Store<AppStateType>

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

let store = createStore(rootReducer);

// window.store = store;

export default store