import React from "react"
import { create } from "react-test-renderer"
import ProfileStatus from "./ProfileStatus"

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="nikita" />)
        const instance = component.getInstance()
        expect(instance.props.status).toBe("nikita")
    })
})
