export const selectorGetUsers = (state) => {
    return state.usersReducer.users
}

export const getCurrentPage = (state) => {
    return state.usersReducer.currentPage
}

export const getTotalUsersCount = (state) => {
    return state.usersReducer.totalUsersCount
}

export const getPageSize = (state) => {
    return state.usersReducer.pageSize
}

export const getIsFetching = (state) => {
    return state.usersReducer.isFetching
}