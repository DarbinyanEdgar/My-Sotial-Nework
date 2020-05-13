import React from "react";
import {connect} from "react-redux";
import {setUserProfile} from "../../../../Redux/postReducer";
import Center from "./CenterContent";



class ProfileConteiner extends React.Component {


    render() {

        return (
            <Center {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.postPage.profile,
    isAuth: state.auth.isAuth
})



export default connect(mapStateToProps, {setUserProfile})(ProfileConteiner)