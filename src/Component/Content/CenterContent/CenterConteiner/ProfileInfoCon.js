import React from "react";
import ProfileInfo from "./ProfileInfo";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../../../Redux/postReducer";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileInfoCon extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 7938
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }


    render() {
        return (
            <ProfileInfo profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }


}


let mapStateToProps = (state) => ({
    profile: state.postPage.profile,
    status:state.postPage.status,

})


export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus,updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileInfoCon)
