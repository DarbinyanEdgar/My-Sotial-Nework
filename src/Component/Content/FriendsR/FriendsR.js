import React from "react";
import classes from './FriendsR.module.css'
import Friend from "./Friend/Friend";


const Friends = (props) => {

    let state = props.friendPage

    let FriendElements = state.friendData.map(friendData => <Friend name={friendData.name} id={friendData.id}
                                                                    img={friendData.img}/>)

    return (
        <div className={classes.friends}>
            <div className={classes.main}>
                <div className={classes.name}>
                    <a>Friends</a>
                </div>
            </div>
            <div classname={classes.r}>
                <input type="text" className={classes.rs} placeholder="   Search Contacts...."/>

            </div>

            {FriendElements}

        </div>
    )
}
export default Friends