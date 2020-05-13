import React from "react";
import Avatar from "react-avatar";
import classes from './ContentCenter3.module.css'


import SimpleMap from "./map";


const CentrBox3 = () => {
    return (
        <div className={classes.center3}>
            <div className={classes.row}>
                <div>
                    <Avatar size="40" round="50px"
                            src="https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"/>
                </div>
                <div className={classes.title}>
                    <li><a href="">Janice Griffith</a></li>
                    <li>Published: June,2 2018 19:PM</li>
                </div>
            </div>
            <div className={classes.pic}>

                <SimpleMap/>
            </div>

            <div className={classes.feedback}>
                <span className="material-icons">visibility</span>
                <span className="material-icons">chat_bubble_outline</span>
                <span className="material-icons">favorite_border</span>
                <span className="material-icons">favorite_border</span>
            </div>


            <p className={classes.prow}>Curabitur Lonely Cat Enjoying in Summer <a>#mypage</a> ullamcorper ultricies nisi. Nam
                eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
                amet adipiscing sem neque sed ipsum. Nam quam nunc,</p>

            <div className={classes.comment}>
                <div className={classes.avat}>
                    <Avatar size="35" round="50px"
                            src="https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"/>
                </div>
                <div className={classes.commentmain}>
                    <div className={classes.commentRow}>
                        <li><a href="">Jason Borne</a></li>
                        <p>1 year ago </p>
                        <span className="material-icons">reply</span>

                    </div>
                    <li>we are working for the dance and sing songs. this car is very awesome for the youngster. please
                        vote this car and like our post
                    </li>
                </div>
            </div>
            <div className={classes.comment}>
                <div className={classes.avat}>
                    <Avatar size="35" round="50px"
                            src="https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"/>
                </div>
                <div className={classes.commentmain}>
                    <div className={classes.commentRow}>
                        <li><a href="">Jason Borne</a></li>
                        <p>1 year ago </p>
                        <span className="material-icons">reply</span>

                    </div>
                    <li>we are working for the dance and sing songs. this car is very awesome for the youngster. please
                        vote this car and like our post
                    </li>
                </div>
            </div>


            <div className={classes.more}><a>More Comments</a></div>
            <div className={classes.inputrow}>
                <div className={classes.avat}>
                    <Avatar size="35" round="50px"
                            src="https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"/>
                </div>
                <div className={classes.inp}>
                    <form><input placeholder="   Post your comment"/></form>
                </div>
            </div>
        </div>
    )
}
export default CentrBox3