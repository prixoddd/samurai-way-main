import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/img/smallBorat.jpg';
import {mapStateToPropsType} from './UsersContainer';
import {NavLink} from 'react-router-dom';

type UsersPropsType = mapStateToPropsType & {
    onPageChanged: (p: number)=> void
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
                {pages.map(p=>{
                    return <span className={props.currentPage === p ? styles.selectedPage : ''}
                                 onClick={() => {props.onPageChanged(p)}}>{p}</span>
                })}
            </div>
            {/*<button onClick={() => {}}>Get users</button>*/}
            {props.users.map((wl: any) => <div key={wl.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + wl.id}>
                            <img src={wl.photos.small != null ? wl.photos.small : userPhoto} className={styles.userPhoto}
                                 alt='blabla'/>
                        </NavLink>

                    </div>
                    <div>
                        {wl.followed
                            ? <button onClick={() => {
                                props.unfollow(wl.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(wl.id)
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
