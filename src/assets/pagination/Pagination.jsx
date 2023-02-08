import React, {useEffect, useState} from 'react';
import styles from './pagination.module.css'

let Pagination = ({totalItemsCount, getPage}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const portionSize = 5
    const pageSize = 10
    let pages = []
    let countPages = Math.ceil(totalItemsCount / pageSize)
    for (let i = 1; i <= countPages; i++) {
        pages.push(i)
    }
    let curPF = ((currentPage - portionSize - 1) < 0) ? 0 : currentPage - portionSize - 1
    let curPL = currentPage + portionSize
    let slicedPages = pages.slice(curPF, curPL)

    useEffect(() => {
        getPage(currentPage, pageSize)
    },[currentPage])

    const onPageChange = (page) => {
        setCurrentPage(page)
        getPage(page, pageSize)
    }

    const nextBtn = () => {
        setCurrentPage(currentPage + portionSize * 2)
    }
    const prevBtn = () => {
        setCurrentPage(((currentPage - portionSize * 2) < 0) ? 1 : currentPage - portionSize)
    }

    return <div>
        <div className={styles.pagination_container + ' flex'}>
            {   currentPage > portionSize &&
                <button
                className={styles.button}
                onClick={prevBtn}
            >Предыдущие страницы</button>}
            {
                slicedPages
                    .map(page => {
                    return (
                        <span key={page}
                              className={`${styles.page_number} ${page === currentPage ? styles.page_action : ''}`}
                              onClick={() => {
                                  onPageChange(page)
                              }}>{page}</span>)
                })
            }
            <button
                className={styles.button}
                onClick={nextBtn}
            >Следующие старницы</button>
        </div>
    </div>
}

export default Pagination;