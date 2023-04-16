import React, {ReactNode} from 'react';
import {StoreType} from './redux/store';
import {AppStateTypeMinus} from './index';
import {ReduxStoreType} from './redux/redux-store';

// interface IContextProps {
//     state: AppStateTypeMinus;
//     dispatch: ({type}: { type: string }) => void
//     getState: () => AppStateTypeMinus
// }

const StoreContext = React.createContext({} as ReduxStoreType)

export type ProviderType = {
    store: ReduxStoreType
    children: React.ReactNode
}

export const Provider = (props: any) => {
    return <StoreContext.Provider value={props.store} >
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext