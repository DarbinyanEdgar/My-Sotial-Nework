import React from "react";
import {connect} from "react-redux";
import Friends from "./FriendsR";




let mapStateToProps=(state)=>{
    return{
        friendPage:state.friendPage
    }
}
let mapDispatchToProps=()=>{
    return{}
}

const FriendConteiner = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendConteiner