import React from "react";
import classes from "./SideBarMenu.module.css"

import Icon from "@material-ui/core/Icon";


const  SideBarMenu = () => {
    return (

        <div className={classes.item}>
            <span className="material-icons">dynamic_feed</span>
            <span className="material-icons">star_border</span>
            <span className="material-icons">trending_up</span>
            <span className="material-icons">save_alt</span>
            <span className="material-icons">textsms</span>
            <span className="material-icons">widgets</span>
            <span className="material-icons">how_to_reg</span>
            <span className="material-icons">people</span>
            <span className="material-icons">event_note</span>

        </div>
    )
}
export default SideBarMenu