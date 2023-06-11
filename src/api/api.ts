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
    },
    unfollow(id = 1) {
        return instance.delete(`follow/` + id)
            .then(response => {
                return response.data
            })
    },
    follow(id = 1) {
        return instance.post(`follow/` + id)
            .then(response => {
                return response.data
            })
    },
    getProfile(userId: string) {
       return instance.get(`profile/` + userId)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}