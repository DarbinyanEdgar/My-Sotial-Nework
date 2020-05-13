import React from "react";
import {onPostChangeCrerator, onPostCrerator} from "../../../../../Redux/postReducer";
import CentrBox from "./ContentCentr";
import {connect} from "react-redux";



let mapStateToProps=(state)=>{
    return{
        postPage:state.postPage
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        addPost:(post)=>{dispatch(onPostCrerator(post));},
        newPost:()=>{dispatch(onPostChangeCrerator())}
    }
}
const CentrBoxConteiner = connect(mapStateToProps,mapDispatchToProps)(CentrBox)
export default CentrBoxConteiner