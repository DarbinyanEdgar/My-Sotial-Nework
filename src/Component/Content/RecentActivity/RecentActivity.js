import React from "react";
import classes from './RcentActivity.module.css'

const RecentActivity = () => {
    return (
        <div className={classes.recent}>
            <div className={classes.main}>
                <div className={classes.name}>
                    <a>Recent Activinpmty</a>
                </div>
            </div>
            <div className={classes.row}>
                <h5>10 hours Ago</h5>
                <a href="#">Commented on Video posted</a>
                <a href="#"> black demon.</a>
            </div>
            <div className={classes.row}>
                <h5>30 Days Ago</h5>
                <a href="#">Posted your status. “Hello guys,</a>
                <a href="#"> how are you?”</a>
            </div>
            <div className={classes.row}>
                <h5>2 Years Ago</h5>
                <a href="#">Commented on Video posted</a>
                <a href="#"> black demon.</a>
            </div>
        </div>
    )
}
export default RecentActivity