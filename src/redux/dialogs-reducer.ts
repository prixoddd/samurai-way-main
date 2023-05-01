import {ActionTypes} from './store';

let initialState = {
    messagesData: [
        {id: 1, name: "Nikita"},
        {id: 2, name: "Arkadi"},
        {id: 3, name: "Egor"},
        {id: 4, name: "Sika"},
        {id: 5, name: "hgfhfgh"},
        {id: 6, name: "Nikhfghgfhfgita"},
        {id: 7, name: "Nikhfghfita"},
    ] as Array<MyMessageDataItemType>,
    dialogsData: [
        {id: 1, message: "HI"},
        {id: 1, message: "How is your day"},
        {id: 1, message: "trololololo"},
        {id: 1, message: "sdfsdfdsfsdfs"},
    ] as Array<MyDialogItemType>,
    newDialogText: ""
}

export type InitialStateType = typeof initialState

export type MyMessageDataItemType = {
    id: number
    name: string
}
export type MyDialogItemType = {
    id: number
    message: string
}

const dialogsReducer = (state: InitialStateType = initialState, action: ActionTypes) => {

    switch (action.type) {
        case 'ADD-DIALOG':
            let newDialog: MyDialogItemType = {
                id: 1,
                message: state.newDialogText
            }
            return {
                ...state,
                newDialogText: '',
                dialogsData: [...state.dialogsData, newDialog]
            }
        case 'UPDATE.NEW.DIALOG.TEXT':
            return {
                ...state,
                dialogsData: [...state.dialogsData],
                newDialogText: action.newDialog
            }
        default:
            return state
    }

}

export type AddDialogActionType = ReturnType<typeof addDialogActionCreator>
export type updateNewDialogTextActionType = ReturnType<typeof UpdateNewDialogActionCreator>

export const addDialogActionCreator = () => ({type: 'ADD-DIALOG'} as const)
export const UpdateNewDialogActionCreator = (newDialog: string) => ({
    type: 'UPDATE.NEW.DIALOG.TEXT',
    newDialog: newDialog
} as const)

export default dialogsReducer