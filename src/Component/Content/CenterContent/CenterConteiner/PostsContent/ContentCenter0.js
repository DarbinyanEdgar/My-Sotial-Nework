import React from "react";
import Avatar from "react-avatar";
import classes from './ContentCenter0.module.css'





const CenterBox0 = () => {


    let newPost = React.createRef()

    let onPost = () => {
        let post = newPost.current.value;
        alert(post)
    }

    return (
        <div className={classes.center0}>
            <div className={classes.row}>

                <div className={classes.inputrow}>
                    <div className={classes.avat}>
                        <Avatar size="47" round="50px"
                                src="https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"/>
                    </div>
                    <div className={classes.inp}>
                        <form><input ref={newPost} placeholder="   Post your comment"/></form>
                        <div className={classes.sotial}>
                            <div className={classes.sotic}>
                                <span className="material-icons">audiotrack</span>
                                <span className="material-icons">image</span>
                                <span className="material-icons">videocam</span>
                                <span className="material-icons">camera_alt</span>
                                <button onClick={onPost}>Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CenterBox0