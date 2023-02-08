import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {getUsersThunk, userFollowThunk, userUnfollowThunk} from "../../redux/usersReducer";
import Preloader from "../preloader/preloader";
import {compose} from "redux";
import {AuthNavigate} from "../../hoc/withAuthNavigate";
import {
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    selectorGetUsers
} from "../../redux/selectors/usersSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize, getUsersThunk} = this.props
        getUsersThunk(currentPage, pageSize)
    }

    onPageChanged = (page) => {
        const {pageSize, getUsersThunk} = this.props
        getUsersThunk(page, pageSize)
    }
    userFollow = (id) => {
        const {userFollowThunk} = this.props
        userFollowThunk(id)

    }
    userUnfollow = (id) => {
        const {userUnfollowThunk} = this.props
        userUnfollowThunk(id)
    }

    render() {
        const {isFetching, totalUsersCount, pageSize, users} = this.props
        return <>
            {isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                onPageChanged={this.onPageChanged}
                users={users}
                follow={this.userFollow}
                unfollow={this.userUnfollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: selectorGetUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state)
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