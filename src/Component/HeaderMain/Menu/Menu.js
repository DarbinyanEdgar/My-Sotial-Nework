import React from "react";
import classes from './Menu.module.css'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Icon from '@material-ui/core/Icon';
import BadgeAvatars from "./Avatar";


const Menu = () => {
    return (
        <div className={classes.menu}>
            <div className={classes.menurow}>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">General</a></li>
                    <li><a href="">Account Settings</a></li>
                    <li><a href="">More Pages</a></li>
                </ul>

            </div>
            <div>
                <div className={classes.settingArea}>
                    <ul>
                        <ButtonGroup variant="text" color="red" size="large" aria-label="text primary button group">
                            <Button><Icon>search</Icon></Button>
                            <Button><span className="material-icons">house</span></Button>
                            <Button><span className="material-icons">notifications_none</span></Button>
                            <Button><span className="material-icons">chat_bubble_outline</span></Button>
                            <Button><span className="material-icons">language</span></Button>
                        </ButtonGroup>
                    </ul>
                    <div className={classes.avatar}>
                        <BadgeAvatars
                            url={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJDdxFNmiIfWKKXZdmG6bqvxiQ4sVdjQ7WKvur2obkwklXoIrs&usqp=CAU"}/>

                    </div>

                </div>
                <div>

                </div>
            </div>


        </div>
    )
}
export default Menu