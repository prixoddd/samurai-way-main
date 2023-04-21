import {combineReducers, createStore, Store} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

type ReducersType = typeof reducers
export type StateType = ReturnType<ReducersType>
export type ReduxStoreType = Store<StateType>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

let store = createStore(reducers);

export default store