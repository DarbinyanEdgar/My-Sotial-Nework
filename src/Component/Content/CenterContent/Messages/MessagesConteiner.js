import React from "react";
import {onMessageChangeActionCreater, onSendMessageActionCreater} from "../../../../Redux/messageReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import Redirect from "react-router-dom/es/Redirect";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage,
           }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateMassage: (text) => {
           dispatch(onMessageChangeActionCreater(text))
        },
        addMessage: () => {
           dispatch(onSendMessageActionCreater())
        }
    }
}





export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages)