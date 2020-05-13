import React from "react";
import Avatar from "react-avatar";
import classes from '../PostsContent/ContentCentr.module.css'

const PostContent = (props) => {
    return (
        <div className={classes.comment}>
            <div className={classes.avat}>
                <Avatar size="35" round="50px"
                        src={props.img} />
            </div>
            <div className={classes.commentmain}>
                <div className={classes.commentRow}>
                    <li><a href="">{props.name}</a></li>
                    <p>1 year ago </p>
                    <span className="material-icons">reply</span>

                </div>
                <li>{props.post}
                </li>
            </div>
        </div>
    )

}
export default PostContent