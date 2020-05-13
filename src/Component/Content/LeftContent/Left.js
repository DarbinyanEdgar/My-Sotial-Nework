import React from "react";
import classes from './Left.module.css'
import Folower from "../Folowers/Folowers";
import ContentMenu from "../CenterContent/ContentMenu/ContentMenu";
import RecentActivity from "../RecentActivity/RecentActivity";

const Left = () => {
    return (
        <div className={classes.left}>
            <ContentMenu/>
            <RecentActivity/>
            <Folower/>

        </div>
    )
}
export default Left