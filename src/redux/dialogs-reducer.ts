import {MyDialogItemType} from './state';

const dialogsReducer = (state: any, action: any) => {

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