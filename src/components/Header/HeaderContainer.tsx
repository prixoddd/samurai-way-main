import React from 'react';
import Header from './Header';
import axios from 'axios';
import {setUserDataAC} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';

export type mapStateToPropsType = {
    isAuth: boolean,
    login: string | null
}

export  type HeaderPropsType = mapStateToPropsType & {
    setUserDataAC: (id: number, email: string, login: string) => void
}

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                // debugger
                if(response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setUserDataAC(id, email, login)
                }
            })

    }

    render() {
        const props = this.props
        return <Header {...props} />
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(mapStateToProps, {setUserDataAC})(HeaderContainer);