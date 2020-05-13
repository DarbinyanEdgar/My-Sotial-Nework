import React from "react";
import classes from './Right.module.css'

import Friends from "../FriendsR/FriendsR";
import FriendConteiner from "../FriendsR/FriendsRConteiner";

const Right = (props) => {
    return (
        <div className={classes.right}>
            <FriendConteiner/>

        </div>
    )
}
export default Right