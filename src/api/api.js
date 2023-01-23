import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '1f2ac79e-58a1-4023-83e7-826a6a7e7253'
    },

})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    onPageChanged(page, pageSize = 10) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                    return response.data;
                }
            )
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },
}

export const profileAPI = {
    getUserProfile(id) {
        return instance.get(`profile/` + id)
            .then(response => {
                return response.data
            })
    },
    getUserStatus(id) {
        return instance.get(`/profile/status/` + id)
    },
    updateUserStatus(status) {
        return instance.put(`/profile/status`, {status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login({email, password, rememberMe = false, captcha = false}) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => {
                return response.data
            })
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data
            })
    }
}



