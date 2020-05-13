import React from "react";
import classes from './MainContent.module.css'
import Left from "./LeftContent/Left";
import Right from "./RightContent/Right";
import ProfileConteiner from "./CenterContent/CenterConteiner/ProfileConteiner";



const MainContent = (props) => {

    return (

        <div className={classes.content}>

            <Left/>
            {/**/}
            {/*<Route path="/profile/:userId?" render={() => <ProfileConteiner />}/>*/}
            <ProfileConteiner/>
            <Right />
        </div>

    )
}
export default MainContent