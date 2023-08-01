import { ActionTypes } from "./store"

let initialState = {
    messagesData: [
        { id: 1, name: "Nikita" },
        { id: 2, name: "Arkadi" },
        { id: 3, name: "Egor" },
        { id: 4, name: "Sika" },
        { id: 5, name: "hgfhfgh" },
        { id: 6, name: "Nikhfghgfhfgita" },
        { id: 7, name: "Nikhfghfita" },
    ] as Array<MyMessageDataItemType>,
    dialogsData: [
        { id: 1, message: "HI" },
        { id: 1, message: "How is your day" },
        { id: 1, message: "trololololo" },
        { id: 1, message: "sdfsdfdsfsdfs" },
    ] as Array<MyDialogItemType>,
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
        case "ADD-DIALOG":
            let newDialog: MyDialogItemType = {
                id: 1,
                message: action.newMessageBody,
            }
            return {
                ...state,
                dialogsData: [...state.dialogsData, newDialog],
            }
        default:
            return state
    }
}

export type AddDialogActionType = ReturnType<typeof addDialogActionCreator>

export const addDialogActionCreator = (newMessageBody: string) => ({ type: "ADD-DIALOG", newMessageBody }) as const

export default dialogsReducer
