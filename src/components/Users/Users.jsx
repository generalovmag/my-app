import React from 'react';
import Pagination from "../../assets/pagination/Pagination";
import User from "./User";

let Users = ({totalUsersCount, pageSize, currentPage, users, unfollow, follow, onPageChanged }) => {
    return <div>
        <Pagination
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChanged={onPageChanged}
        />
        {
            users.map(u => <User
                user={u}
                unfollow={unfollow}
                follow={follow}
                key={u.id}
            />)
        }
    </div>
}

export default Users;