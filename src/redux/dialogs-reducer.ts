import {ActionTypes, MyDialogItemType} from './store';
let initialState = {
    messagesData: [
        {id: 1, name: "Nikita"},
        {id: 2, name: "Arkadi"},
        {id: 3, name: "Egor"},
        {id: 4, name: "Sika"},
        {id: 5, name: "hgfhfgh"},
        {id: 6, name: "Nikhfghgfhfgita"},
        {id: 7, name: "Nikhfghfita"},
    ],
    dialogsData: [
        {id: 1, message: "HI"},
        {id: 1, message: "How is your day"},
        {id: 1, message: "trololololo"},
        {id: 1, message: "sdfsdfdsfsdfs"},
    ],
    newDialogText: ""
}

const dialogsReducer = (state = initialState, action: ActionTypes) => {

    switch (action.type) {
        case 'ADD-DIALOG':
            let newDialog: MyDialogItemType = {
                id: 1,
                message: state.newDialogText

            }
            state.dialogsData.push(newDialog)
            state.newDialogText = ''
            return state
        case 'UPDATE.NEW.DIALOG.TEXT':
            state.newDialogText = action.newDialog
            return state
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