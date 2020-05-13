import React from "react";
import classes from './../Messages.module.css'
import {NavLink} from "react-router-dom";


const Message = (props) => {
    return(

        <div className={classes.message}>
        <NavLink to={"/messages/" + props.id}>{props.message}</NavLink></div>

    )
}

export default Message