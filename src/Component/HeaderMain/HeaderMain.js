import React from "react";
import classes from './HeaderMain.module.css'
import Menu from "./Menu/Menu";
import Left from "../Content/LeftContent/Left";
import {NavLink} from "react-router-dom";


const HeaderMain = (props) => {
    return (
        <header className={classes.headerMain}>
            <div className={classes.logo}>
                <span>G</span>
                <img alt='logo'
                     src="https://miro.medium.com/max/1400/1*BFV8Gwt5BILa-xv04IK2ng.png"/>
                <span>O</span>
            </div>
            <Menu/>
            <div className={classes.loginBlock}>
                {props.isAuth? props.login:
                    <NavLink to={'/Login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default HeaderMain