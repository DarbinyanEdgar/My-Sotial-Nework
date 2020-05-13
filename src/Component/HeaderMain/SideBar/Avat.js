import React from "react";
import Avatar from 'react-avatar'
import classes from "./Avat.module.css"
import Avatars from "./Avatar/Avatar";





const Avat = (props) => {

    let state = props.avatarPage
    let AvatarElements = state.avatarPic.map(a => <Avatars img={a.img}/>)

    return (

        <div className={classes.avat}>
            {AvatarElements}


        </div>


    )
}
export default Avat