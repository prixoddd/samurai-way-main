import React, { useState } from "react"
import styles from "components/common/Paginator/paginator.module.css"

type UsersPropsType = {
    currentPage: number
    onPageChanged: (p: number) => void
    totalUsersCount: number
    pageSize: number
}

const portionSize = 10

const Paginator = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let rightPortionPageNumber = portionNumber * portionSize
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1

    return (
        <div>
            {
                <button
                    onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}
                    disabled={portionNumber <= 1}
                >
                    BACK
                </button>
            }
            {pages
                .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return (
                        <span
                            className={props.currentPage === p ? styles.selectedPage : "" + styles.paginationNumber}
                            // className={styles.paginationNumber}
                            onClick={() => {
                                props.onPageChanged(p)
                            }}
                        >
                            {p}
                        </span>
                    )
                })}
            {
                <button
                    onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}
                    disabled={portionCount < portionNumber}
                >
                    NEXT
                </button>
            }
        </div>
    )
}

export default Paginator

///jwhdsaghdjsgdjhsgdshjjhg
