import React from "react";
import HeaderMain from "./HeaderMain";
import {connect} from "react-redux";
import {getAuthUserData} from "../../Redux/authReducer";



class HeaderMainConteiner extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <HeaderMain {...this.props}/>
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {getAuthUserData})(HeaderMainConteiner)