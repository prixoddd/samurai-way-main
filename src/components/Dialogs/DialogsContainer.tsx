import React from 'react';
import {addDialogActionCreator, InitialStateType} from 'redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from 'redux/redux-store';
import {compose, Dispatch} from 'redux';
import {WithAuthRedirect} from 'hoc/withAuthRedirect';


type mapStatePropsType = {
    dialogsPage: InitialStateType

}

type mapDispatchToPropsType = {
    sendMessage: (newMessageBody:string) => void
}

export type DialogsPropsType = mapStatePropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}


let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody:string) => {
            dispatch(addDialogActionCreator(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)