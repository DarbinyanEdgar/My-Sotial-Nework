import React from "react";
import classes from './CenterContent.module.css'
import CentrBox3 from "./PostsContent/ContentCenter3";
import CenterBox0 from "./PostsContent/ContentCenter0";
import {BrowserRouter, Route} from "react-router-dom";
import MessagesConteiner from "../Messages/MessagesConteiner";
import CentrBoxConteiner from "./PostsContent/ContentCentrConteiner";
import CentrBox2Conteiner from "./PostsContent/ContentCentr2Conteiner";
import UsersConteiner from "../Users/UsersConteiner";
import ProfileInfoCon from "./ProfileInfoCon";
import Login from "../../../Login/login";


const Center = (props) => {

    return (

        <div className={classes.center}>
            <Route path="/profile/:userId?" render={() => <ProfileInfoCon profile={props.profile}  />}/>
            <Route path="/profile" render={() => <CenterBox0/>}/>
            <Route path="/profile" render={() => <CentrBoxConteiner/>}/>
            <Route path="/profile" render={() => <CentrBox2Conteiner/>}/>
            <Route path="/profile" render={() => <CentrBox3/>}/>
            <Route path="/messages" render={() => <MessagesConteiner/>}/>
            <Route path="/users" render={() => <UsersConteiner/>}/>
            <Route path="/login" render={() => <Login/>}/>
        </div>


    )
}
export default Center