import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
  follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow
} from "../../redux/usersReducer";
import axios from "axios";
import Preloader from "../preloader/preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page)
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
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
        follow={this.props.follow}
        unfollow={this.props.unfollow}
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