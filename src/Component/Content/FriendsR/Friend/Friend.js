import React from "react";
import classes from './../FriendsR.module.css'
import Avatar from "@material-ui/core/Avatar";



const Friend = (props) => {
    return(

        <div className={classes.row}>
            <div>
                <Avatar size="35" round="50px"
                        src={props.img}/>
            </div>
            <div>
                <li><a href="">{props.name}</a></li>
                <li>Add Friend</li>
            </div>
        </div>


    )
}

export default  Friend