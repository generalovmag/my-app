import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    getUsersThunk,
    userFollowThunk,
    userUnfollowThunk
} from "../../redux/usersReducer";
import Preloader from "../preloader/preloader";
import {compose} from "redux";
import {AuthNavigate} from "../../hoc/withAuthNavigate";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page) => {
        this.props.getUsersThunk(page, this.props.pageSize)
    }
    userFollow = (id) => {
        this.props.userFollowThunk(id)

    }
    userUnfollow = (id) => {
        this.props.userUnfollowThunk(id)
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

export default compose(
    connect(mapStateToProps, {
        userUnfollowThunk,
        userFollowThunk,
        getUsersThunk
    }),
    AuthNavigate
)
(UsersContainer)