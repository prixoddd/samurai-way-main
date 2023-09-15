import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "7ef044b0-5189-4763-8a75-7ec374e4c5ba",
    },
})

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
            return response.data
        })
    },
    unfollow(id = 1) {
        return instance.delete(`follow/` + id).then((response) => {
            return response.data
        })
    },
    follow(id = 1) {
        return instance.post(`follow/` + id).then((response) => {
            return response.data
        })
    },
    getProfile(userId: string) {
        console.warn("Obsolete method")
        return profileAPI.getProfile(userId)
    },
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, { status: status })
    },
    updatePhoto(newPhoto: string) {
        const formData = new FormData()
        formData.append("image", newPhoto)

        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
    },
    saveProfile(profile: any) {
        return instance.put(`profile`, profile)
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    logOut() {
        return instance.delete(`auth/login`)
    },
}
