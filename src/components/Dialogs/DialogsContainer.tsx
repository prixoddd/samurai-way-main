import React from 'react';
import {addDialogActionCreator, InitialStateType, UpdateNewDialogActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';


type mapStatePropsType = {
    dialogsPage: InitialStateType
    isAuth: boolean

}

type mapDispatchToPropsType = {
    sendMessage: () => void
    updateMessageBody: (body: string) => void
}

export type DialogsPropsType = mapStatePropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(addDialogActionCreator())
        },
        updateMessageBody: (body: string) => {
            dispatch(UpdateNewDialogActionCreator(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;