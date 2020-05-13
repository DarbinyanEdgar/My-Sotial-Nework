import React from "react";
import classes from './ContentMenu.module.css'
import {BrowserRouter, NavLink} from "react-router-dom";

const ContentMenu = () => {
    return (

        <div className={classes.content}>
            <div className={classes.main}>
                <div className={classes.name}>
                    <a>Shortcuts</a>
                </div>
            </div>
            <ul>
                <li>
                    <span className="material-icons" >dynamic_feed</span>
                    <NavLink to="/profile" activeClassName={classes.active} > Profile</NavLink></li>
                <li>
                    <span className="material-icons" >inbox</span>
                    <NavLink to="/inbox" activeClassName={classes.active}> Inbox</NavLink></li>
                <li>
                    <span className="material-icons">pages</span>
                    <NavLink to="myPage" activeClassName={classes.active}> My Page</NavLink></li>
                <li>
                    <span className="material-icons">people</span>
                    <NavLink to="friends" activeClassName={classes.active}> Friends</NavLink></li>
                <li>
                    <span className="material-icons">message</span>
                    <NavLink to="messages" activeClassName={classes.active}> Messages</NavLink></li>
                <li>
                    <span className="material-icons">insert_photo</span>
                    <NavLink to="image" activeClassName={classes.active}> Image</NavLink></li>
                <li>
                    <span className="material-icons">videocam</span>
                    <NavLink to="video" activeClassName={classes.active}> Video</NavLink></li>
                <li>
                    <span className="material-icons">notifications_none</span>
                    <NavLink to="notifications" activeClassName={classes.active}> Notifications</NavLink></li>
                <li>
                    <span className="material-icons">supervised_user_circle</span>
                    <NavLink to="users" activeClassName={classes.active}> Users </NavLink></li>
                <li>
                    <span className="material-icons">poll</span>
                    <NavLink to="profile1" activeClassName={classes.active}> Profile1</NavLink></li>
                <li>
                    <span className="material-icons">power_settings_new</span>
                    <NavLink to="login" activeClassName={classes.active}> Login</NavLink></li>
            </ul>
        </div>


    )
}
export default ContentMenu