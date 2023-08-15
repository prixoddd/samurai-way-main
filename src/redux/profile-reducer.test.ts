import profileReducer, { addPostActionCreator, deletePost, MyPostDataItemType } from "redux/profile-reducer"
import { v1 } from "uuid"

let state = {
    myPostData: [
        { message: "Hello how are you", countLikes: "1", id: "1" },
        { message: "Nice weather outside", countLikes: "15", id: v1() },
        { message: "Nice weather outside", countLikes: "15", id: v1() },
    ] as Array<MyPostDataItemType>,
    profile: null,
    status: "",
}

it("length of the post should be incremented", () => {
    // 1. test data
    let action = addPostActionCreator("hellllo")

    // 2.action
    let newState = profileReducer(state, action)

    // 3.expectation
    expect(newState.myPostData.length).toBe(3)
})

it("message of the new post should be correct", () => {
    // 1. test data
    let action = addPostActionCreator("hellllo")

    // 2.action
    let newState = profileReducer(state, action)

    // 3.expectation
    expect(newState.myPostData[2].message).toBe("hellllo")
})

it("length after deleting", () => {
    // 1. test data
    let action = deletePost("1")

    // 2.action
    let newState = profileReducer(state, action)

    // 3.expectation
    expect(newState.myPostData.length).toBe(2)
})
