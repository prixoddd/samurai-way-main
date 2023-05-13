import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/img/smallBorat.jpg';
import {mapStateToPropsType} from './UsersContainer';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

type UsersPropsType = mapStateToPropsType & {
    onPageChanged: (p: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    isFetching?: boolean
}

const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : ''}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {/*<button onClick={() => {}}>Get users</button>*/}
            {props.users.map((wl: any) => <div key={wl.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + wl.id}>
                            <img src={wl.photos.small != null ? wl.photos.small : userPhoto}
                                 className={styles.userPhoto}
                                 alt='blabla'/>
                        </NavLink>

                    </div>
                    <div>
                        {wl.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/` + wl.id, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '7ef044b0-5189-4763-8a75-7ec374e4c5ba'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(wl.id)
                                        }
                                    })

                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/` + wl.id, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '7ef044b0-5189-4763-8a75-7ec374e4c5ba'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(wl.id)
                                        }
                                    })
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <div>{wl.name}</div>
                    <div>{wl.status}</div>
                </span>
                <span>
                    <div>{'wl.location.country'}</div>
                    <div>{'wl.location.city'}</div>
                </span>
            </div>)}
        </div>
    );
};

export default Users;
