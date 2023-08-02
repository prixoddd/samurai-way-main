import React, { FC, ReactElement } from "react"
import s from "./Header.module.css"
import { NavLink } from "react-router-dom"
import { HeaderPropsType } from "./HeaderContainer"

const Header: FC<HeaderPropsType> = (props): ReactElement => {
    return (
        <header className={s.header}>
            <img
                src="https://www.freepnglogos.com/uploads/lion-logo-png/lion-griffe-tattoo-tattoo-maori-tribal-top-mlk-14.png"
                alt="image"
            />
            <div className={s.loginBlock}>
                {props.isAuth ? (
                    <div>
                        {props.login}
                        <button onClick={props.logout}>Log out</button>
                    </div>
                ) : (
                    <NavLink to={"/login"}>Login</NavLink>
                )}
            </div>
        </header>
    )
}

export default Header
