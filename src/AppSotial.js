import React from 'react';
import classes from './AppSotial.module.css'
import HeaderMain from "./Component/HeaderMain/HeaderMain";
import SideBar from "./Component/HeaderMain/SideBar/SideBar";
import MainContent from "./Component/Content/MainContent";
import SideBarRight from "./Component/HeaderMain/SideBar/SideBarRight";
import HeaderMainConteiner from "./Component/HeaderMain/HeaderMainConteiner";



const AppSotial = () => {

    return (

        <div className={classes.wrapper}>
            <SideBar/>
            <SideBarRight/>
            <HeaderMainConteiner/>
            <MainContent />
        </div>


    );
}

export default AppSotial;
