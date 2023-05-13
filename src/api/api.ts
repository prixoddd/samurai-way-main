import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '7ef044b0-5189-4763-8a75-7ec374e4c5ba'
    }
})

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data
            })
    }
}

// export const getUsers = (currentPage = 1, pageSize = 10) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
//         .then(response => {
//             return response.data
//         })
// }

// export const getUsers2 = () => {
//     return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/` + wl.id, {
//         withCredentials: true,
//         headers: {
//             'API-KEY': '7ef044b0-5189-4763-8a75-7ec374e4c5ba'
//         }
//     })
// }
