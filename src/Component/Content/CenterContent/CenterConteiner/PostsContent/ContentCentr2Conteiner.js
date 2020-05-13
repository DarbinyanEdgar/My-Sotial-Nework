import React from "react";
import {
    onPostChangeCrerator,
    onPostChangeCrerator1,
    onPostCrerator,
    onPostCrerator1,
} from "../../../../../Redux/postReducer";
import CentrBox2 from "./ContentCentr2";

import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        postPage: state.postPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost1: (post) => {
            dispatch(onPostCrerator1(post));
        },
        newPost1: () => {
            dispatch(onPostChangeCrerator1())
        }
    }
}
const CentrBox2Conteiner = connect(mapStateToProps, mapDispatchToProps)(CentrBox2)

export default CentrBox2Conteiner

