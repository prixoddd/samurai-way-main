import React from 'react';
import styles from './users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/img/smallBorat.jpg'


// const Users = (props: MyPostsPropsType) => {
const Users = (props: any) => {

    let getUsers = () => {
        if (props.users.length === 0) {

            // axios
            //     .get('https://social-network.samuraijs.com/api/1.0/users')
            //     .then((response: AxiosResponse) => {
            //         props.setUsers(response.data.items);
            //     });

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })

            // props.setUsers(
            //     [
            //         {
            //             id: 1,
            //             photoUrl: 'https://pbs.twimg.com/profile_images/601467489193594881/_gJqoIIL_400x400.jpg',
            //             followed: true,
            //             fullName: 'Nikita',
            //             status: 'I am a boss',
            //             location: {city: 'Tallinn', country: 'Estonia'}
            //         },
            //         {
            //             id: 2,
            //             photoUrl: 'https://pbs.twimg.com/profile_images/601467489193594881/_gJqoIIL_400x400.jpg',
            //             followed: false,
            //             fullName: 'Sergio',
            //             status: 'I am crazy',
            //             location: {city: 'Moscow', country: 'Russia'}
            //         },
            //         {
            //             id: 3,
            //             photoUrl: 'https://pbs.twimg.com/profile_images/601467489193594881/_gJqoIIL_400x400.jpg',
            //             followed: false,
            //             fullName: 'Barbara',
            //             status: 'Feeling great',
            //             location: {city: 'Madrid', country: 'Spain'}
            //         },
            //     ]
            // )
        }
    }



    // useEffect(()=>{
    //     props.setUsers(
    //         [
    //             {
    //                 id: 1,
    //                 photoUrl: 'https://pbs.twimg.com/profile_images/601467489193594881/_gJqoIIL_400x400.jpg',
    //                 followed: true,
    //                 fullName: 'Nikita',
    //                 status: 'I am a boss',
    //                 location: {city: 'Tallinn', country: 'Estonia'}
    //             },
    //             {
    //                 id: 2,
    //                 photoUrl: 'https://pbs.twimg.com/profile_images/601467489193594881/_gJqoIIL_400x400.jpg',
    //                 followed: false,
    //                 fullName: 'Sergio',
    //                 status: 'I am crazy',
    //                 location: {city: 'Moscow', country: 'Russia'}
    //             },
    //             {
    //                 id: 3,
    //                 photoUrl: 'https://pbs.twimg.com/profile_images/601467489193594881/_gJqoIIL_400x400.jpg',
    //                 followed: false,
    //                 fullName: 'Barbara',
    //                 status: 'Feeling great',
    //                 location: {city: 'Madrid', country: 'Spain'}
    //             },
    //         ]
    //     )
    // }, [])


    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {props.users.map((wl: any) => <div key={wl.id}>
                <span>
                    <div>
                        <img src={wl.photos.small != null ? wl.photos.small : userPhoto} className={styles.userPhoto} alt='blabla'/>
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