import React from "react";
import {connect} from "react-redux";
import Avat from "./Avat";






let mapStateToProps=(state)=>{
    return{
        avatarPage:state.avatarPage
    }
}
let mapDispatchToProps=()=>{
    return{}
}

const AvatConteiner = connect(mapStateToProps, mapDispatchToProps)(Avat)
export default AvatConteiner