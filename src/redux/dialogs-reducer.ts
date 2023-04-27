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

const  dialogsReducer = (state:InitialStateType = initialState, action: ActionTypes) => {

    let stateCopy = {...state}

    switch (action.type) {
        case 'ADD-DIALOG':{
            let newDialog: MyDialogItemType = {
                id: 1,
                message: state.newDialogText

            }
            let stateCopy = {...state}
            stateCopy.dialogsData = [...state.dialogsData]
            stateCopy.dialogsData.push(newDialog)
            stateCopy.newDialogText = ''
            return stateCopy
        }
        case 'UPDATE.NEW.DIALOG.TEXT':{
            let stateCopy = {...state}
            stateCopy.dialogsData = [...state.dialogsData]
            stateCopy.newDialogText = action.newDialog
            return stateCopy
        }
        default:
            return state
    }

    // if (action.type === 'ADD-DIALOG') {
    //     let newDialog: MyDialogItemType = {
    //         id: 1,
    //         message: state.newDialogText
    //
    //     }
    //     state.dialogsData.push(newDialog)
    //     state.newDialogText = ''
    //
    // } else if (action.type === 'UPDATE.NEW.DIALOG.TEXT') {
    //     state.newDialogText = action.newDialog
    //
    // }
    //
    // return state
}

// type AddDialogActionType = {
//     type: 'ADD-DIALOG'
// }

export type AddDialogActionType = ReturnType<typeof addDialogActionCreator>

// type updateNewDialogTextActionType = {
//     type: 'UPDATE.NEW.DIALOG.TEXT'
//     newDialog: string
// }

export type updateNewDialogTextActionType = ReturnType<typeof UpdateNewDialogActionCreator>

export const addDialogActionCreator = () => ({type: 'ADD-DIALOG'} as const)
export const UpdateNewDialogActionCreator = (newDialog: string) => ({
    type: 'UPDATE.NEW.DIALOG.TEXT',
    newDialog: newDialog
}as const)

export default dialogsReducer