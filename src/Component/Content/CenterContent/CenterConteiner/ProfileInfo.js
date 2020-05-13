import React from "react";
import Avatar from "react-avatar";
import classes from './PostsContent/ContentCenter0.module.css'
import Prelouder from "../Common/Prelouder";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {


    if (!props.profile) {
        return <Prelouder/>

    }

    return (
        <div className={classes.center0}>
            <div className={classes.row}>

                <div className={classes.inputrow}>
                    <div className={classes.avat}>
                        <Avatar size="47" round="50px"
                                src={props.profile.photos.large}/>
                                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                          <div>
                              <span > Name--{props.profile.fullName}</span>

                          </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo