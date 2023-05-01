import React from 'react';
import styles from './users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/img/smallBorat.jpg'

class Users extends React.Component<any, any>{

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {
        return (
            <div>
                {/*<button onClick={() => {}}>Get users</button>*/}
                {this.props.users.map((wl: any) => <div key={wl.id}>
                <span>
                    <div>
                        <img src={wl.photos.small != null ? wl.photos.small : userPhoto} className={styles.userPhoto} alt='blabla'/>
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