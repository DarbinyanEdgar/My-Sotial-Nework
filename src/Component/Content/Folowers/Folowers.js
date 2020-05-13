import React from "react";
import classes from './Folowers.module.css'
import Avatar from "react-avatar";


const Folower = () => {
    return (
        <div className={classes.folower}>
            <div className={classes.main}>
                <div className={classes.name}>
                    <a>Who's Following</a>
                </div>
            </div>
          <div className={classes.row}>
              <div>
                <Avatar size="45" round="50px"
                        src="https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"/>
            </div>
            <div>
                <li><a href="">Kelly Bill</a></li>
                <li><a href=""></a>Add Friend</li>
            </div>
        </div>
            <div className={classes.row}>
                <div>
                    <Avatar size="45" round="50px"
                            src="https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"/>
                </div>
                <div>
                    <li><a href="">Kelly Bill</a></li>
                    <li><a href=""></a>Add Friend</li>
                </div>
            </div>
            <div className={classes.row}>
                <div>
                    <Avatar size="45" round="50px"
                            src="https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"/>
                </div>
                <div>
                    <li><a href="">Kelly Bill</a></li>
                    <li><a href=""></a>Add Friend</li>
                </div>
            </div>
            <div className={classes.row}>
                <div>
                    <Avatar size="45" round="50px"
                            src="https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"/>
                </div>
                <div>
                    <li><a href="">Kelly Bill</a></li>
                    <li><a href=""></a>Add Friend</li>
                </div>
            </div>
            <div className={classes.row}>
                <div>
                    <Avatar size="45" round="50px"
                            src="https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"/>
                </div>
                <div>
                    <li><a href="">Kelly Bill</a></li>
                    <li><a href=""></a>Add Friend</li>
                </div>
            </div>
        </div>
    )
}
export default Folower