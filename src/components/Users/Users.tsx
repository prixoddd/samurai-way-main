import React from 'react';
import styles from './users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/img/smallBorat.jpg'
import {InitialStateType} from '../../redux/users-reducer';
import {MyPostsPropsType} from './UsersContainer';

class Users extends React.Component<MyPostsPropsType, InitialStateType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }



        return (
            <div>
                <div>
                    {pages.map(p=>{
                        return <span className={this.props.currentPage === p ? styles.selectedPage : ''}
                        onClick={() => {this.onPageChanged(p)}}>{p}</span>
                    })}
                </div>
                {/*<button onClick={() => {}}>Get users</button>*/}
                {this.props.users.map((wl: any) => <div key={wl.id}>
                <span>
                    <div>
                        <img src={wl.photos.small != null ? wl.photos.small : userPhoto} className={styles.userPhoto}
                             alt='blabla'/>
                    </div>
                    <div>
                        {wl.followed
                            ? <button onClick={() => {
                                this.props.unfollow(wl.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(wl.id)
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
    }

}

export default Users;