import React from "react";
import classes from './../Messages.module.css'
import {NavLink} from "react-router-dom";


const ProfileName = (props) => {
    return (

        <div className={classes.nameItem}>
            <li><NavLink to={"/messages/" + props.id}>{props.name}</NavLink></li>
        </div>
    )
}
export default ProfileName