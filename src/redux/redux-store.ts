import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

type ReducersType = typeof reducers
export type ReduxStoreType = ReturnType<ReducersType>

let reducers = combineReducers({
    // dialogsReducer: dialogsReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

let store = createStore(reducers);

export default store