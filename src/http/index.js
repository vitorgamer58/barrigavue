import axios from "axios";

const BASE_URL = 'http://barrigarest.notasdovitor.top:3001'

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, function (err) {
    return Promise.reject(err)
})

export default {
    login (payload) {
        const endpoint = `${BASE_URL}/auth/signin`

        return axios.post(endpoint, payload)
    },
    cadastro (payload) {
        const endpoint = `${BASE_URL}/auth/signup`

        return axios.post(endpoint, payload)
    },
    getSaldo() {
        const endpoint = `${BASE_URL}/v1/balance`

        return axios.get(endpoint)
    }
}