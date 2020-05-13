import React from "react";
import classes from './SideBar.module.css'
import Avat from "./Avat";
import SideBarMenu from "./SideBarMenu";

const SideBar = () => {
    return (


        <div className={classes.sidebar}>

            <SideBarMenu/>

        </div>


    )
}
export default SideBar