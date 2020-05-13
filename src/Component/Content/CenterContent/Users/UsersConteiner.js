import React from "react";
import {connect} from "react-redux";
import {
    followSuccess, getUsers, setCurrentPageAC,
    toggleFollowingProgressAC, unfollowSuccess
}
    from "../../../../Redux/userReducer";
import Users from "./Users";
import Prelouder from "../Common/Prelouder";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.toggleISFetching(true)
        //
        // usersApi.getUsersApi(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleISFetching(false)
        //     this.props.setUsers(data.items);
        // })
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        //
        // this.props.toggleISFetching(true)
        // this.props.setCurrentPage(pageNumber);
        // usersApi.getUsersApi(pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleISFetching(false)
        //     this.props.setUsers(data.items);
        //
        // })
    }

    render() {

        return <>
            {this.props.isFetching ?
                <Prelouder/> : null}
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChanged={this.onPageChanged}
                   folloingInProgress={this.props.followingInProgress}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default compose(
    connect(mapStateToProps, {
        follow: followSuccess,
        unfollow: unfollowSuccess,
        setCurrentPage: setCurrentPageAC,
        toggleFollowingProgress: toggleFollowingProgressAC,
        getUsers: getUsers

    }),
    withAuthRedirect
)(UsersAPIComponent)