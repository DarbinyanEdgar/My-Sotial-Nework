import React from "react";
import Avatar from "react-avatar";
import classes from './ContentCentr2.module.css'
import Video from "./video";
import PostContent from "../PostContent/postContent";
import {onPostChangeCrerator1, onPostCrerator1} from "../../../../../Redux/postReducer";




const CentrBox2 = (props) => {
    let state = props.postPage
    let postElement = state.postContentData2.map(posts => <PostContent img={posts.img} name={posts.name} post={posts.post}/>)

    let newPost = React.createRef()

    let onPostChange=()=>{
        props.newPost1()
        //props.dispatch(onPostChangeCrerator1())
    }

    let onPost = () => {
        let post = newPost.current.value;
        props.addPost1(post)
        //props.dispatch(onPostCrerator1(post))
        newPost.current.value=''
    }

    return (
        <div className={classes.center2}>
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
                {/*<Video/>*/}

                      </div>

            <div className={classes.feedback}>
                <span className="material-icons">visibility</span>
                <span className="material-icons">chat_bubble_outline</span>
                <span className="material-icons">favorite_border</span>
                <span className="material-icons">favorite_border</span>
            </div>


            <p className={classes.prow}>Lonely Cat Enjoying in Summer Curabitur <a>#mypage</a> ullamcorper ultricies nisi. Nam
                eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
                amet adipiscing sem neque sed ipsum. Nam quam nunc,</p>
            {postElement}


            <div className={classes.more}><a>More Comments</a></div>
            <div className={classes.inputrow}>
                <div className={classes.avat}>
                    <Avatar size="35" round="50px"
                            src="https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"/>
                </div>
                <div className={classes.inp}>
                    <form><input onChange={onPostChange} ref={newPost} placeholder="   Post your comment"/></form>
                    <button onClick={onPost}>Post</button>
                </div>
            </div>
        </div>
    )
}
export default CentrBox2