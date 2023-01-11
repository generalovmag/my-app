import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow
} from "../../redux/usersReducer";
import Preloader from "../preloader/preloader";
import {followedAPI, usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
        usersAPI.onPageChanged(page, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
    }
    userFollow = (id) => {
        followedAPI.follow(id).then(data => {
            if (data.resultCode === 0) {
                this.props.follow(id)
            }
        })
    }
    userUnfollow = (id) => {
        followedAPI.unfollow(id).then(data => {
            if (data.resultCode === 0) {
                this.props.unfollow(id)
            }
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.userFollow}
                unfollow={this.userUnfollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        currentPage: state.usersReducer.currentPage,
        totalUsersCount: state.usersReducer.totalUsersCount,
        pageSize: state.usersReducer.pageSize,
        isFetching: state.usersReducer.isFetching
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    toggleIsFetching
})(UsersContainer)