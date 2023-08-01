import React, { ChangeEvent } from "react"

type propsType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<propsType> {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        console.log("this:", this)
        this.setState({ editMode: true })
    }

    deactivateEditMode = () => {
        this.setState({ editMode: false })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }

    componentDidUpdate(prevProps: Readonly<propsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            })
        }

        console.log("componentDidUpdate")
    }

    render() {
        return (
            <div>
                {!this.state.editMode && (
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "------"}</span>
                    </div>
                )}
                {this.state.editMode && (
                    <div>
                        <input
                            onChange={this.onStatusChange}
                            autoFocus={true}
                            onBlur={this.deactivateEditMode}
                            value={this.state.status}
                        ></input>
                    </div>
                )}
            </div>
        )
    }
}

export default ProfileStatus
