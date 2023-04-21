import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

type ReducersType = typeof rootReducer
export type AppStateType = ReturnType<ReducersType>
// export type ReduxStoreType = Store<AppStateType>

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

let store = createStore(rootReducer);

export default store