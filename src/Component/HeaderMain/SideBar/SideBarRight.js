import React from "react";
import classes from './SideBarRight.module.css'
import Avat from "./Avat";
import AvatConteiner from "./AvatConteiner";


const SideBarRight = (props) => {
    return (

        <div className={classes.sidebarR}>
            <div>
                <AvatConteiner/>
            </div>
        </div>


    )
}

export default SideBarRight