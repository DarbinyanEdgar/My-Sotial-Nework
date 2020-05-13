import React from "react";
import Avatar from "react-avatar";
import classes from './ContentCentr.module.css'
import PostContent from "../PostContent/postContent";
import {onPostChangeCrerator, onPostCrerator} from "../../../../../Redux/postReducer";


const CentrBox = (props) => {


    let state = props.postPage
    let postElement = state.postContentData.map(posts => <PostContent img={posts.img} name={posts.name}
                                                                      post={posts.post}/>);


    let newPost = React.createRef()


    let onPostChange = () => {
        props.newPost()
        // props.dispatch(onPostChangeCrerator())

    }
    let onPost = () => {
        let post = newPost.current.value;
        props.addPost(post)
        //props.dispatch(onPostCrerator(post))
        newPost.current.value = ''
    }

    return (
        <div className={classes.center1}>
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
                <img
                    src="https://media.swncdn.com/cms/CW/Couples/62262-couple-walking-beach-pexels-ibrahim-asad.1200w.tn.jpg"/>
            </div>

            <div className={classes.feedback}>
                <span className="material-icons">visibility</span>
                <span className="material-icons">chat_bubble_outline</span>
                <span className="material-icons">favorite_border</span>
                <span className="material-icons">favorite_border</span>
            </div>


            <p className={classes.prow}>World's most beautiful car in Curabitur <a>#test drive booking !</a> the most
                beatuiful car available in america
                and the saudia arabia, you can book your test drive by our official website</p>

            {postElement}

            <div className={classes.more}><a>More Comments</a></div>
            <div className={classes.inputrow}>
                <div className={classes.avat}>
                    <Avatar size="35" round="50px"
                            src="https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"/>
                </div>
                <div className={classes.inp}>
                    <form><input onChange={onPostChange} value={props.newPost1} ref={newPost}
                                 placeholder="   Post your comment"/></form>
                    <button onClick={onPost}>Post</button>
                </div>

            </div>
        </div>
    )
}
export default CentrBox