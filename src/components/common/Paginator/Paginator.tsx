import React from "react"
import styles from "components/common/Paginator/paginator.module.css"

type UsersPropsType = {
    currentPage: number
    onPageChanged: (p: number) => void
    totalUsersCount: number
    pageSize: number
}

const Paginator = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((p) => {
                return (
                    <span
                        className={props.currentPage === p ? styles.selectedPage : ""}
                        onClick={() => {
                            props.onPageChanged(p)
                        }}
                    >
                        {p}
                    </span>
                )
            })}
        </div>
    )
}

export default Paginator
