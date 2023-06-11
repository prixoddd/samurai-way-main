import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../redux/redux-store';
import {connect} from 'react-redux';

type mapStatePropsForRedirectType = {
    isAuth: boolean
}


let mapStateToPropsForRedirect = (state: AppStateType): mapStatePropsForRedirectType  => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect <T>(Component: ComponentType<T>)  {


    function RedirectComponent(props: mapStatePropsForRedirectType) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T} />
    }

    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedRedirectComponent
}

