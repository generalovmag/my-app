import React from 'react';
import axios from 'axios';

class UsersContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    let pages = []
    let countPages = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    for (let i = 1; i <= countPages; i++) {
      pages.push(i)
    }
    let curP = this.props.currentPage;
    let curPF = ((curP - 10) < 0) ?  0  : curP - 10 ;
    let curPL = curP + 10;
    let slicedPages = pages.slice( curPF, curPL);


    return <Users />
  }
}

export default UsersAPIComponent;