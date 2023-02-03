import React from 'react';
import styles from './pagination.module.css'

let Pagination = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pages = []
    let countPages = Math.ceil(totalUsersCount / pageSize)
    for (let i = 1; i <= countPages; i++) {
        pages.push(i)
    }
    let curP = currentPage
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5
    let curPL = curP + 5
    let slicedPages = pages.slice(curPF, curPL)

    return <div>
        <div className={`${styles.pagination_container} ${styles.flex}`}>
            {
                slicedPages.map(page => {
                    return (
                        <span key={page}
                              className={`${styles.page_number} ${page === currentPage ? styles.page_action : ''}`}
                              onClick={() => {
                                  onPageChanged(page)
                              }}>{page}</span>)
                })
            }
        </div>
    </div>
}

export default Pagination;