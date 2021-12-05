import axios from "axios";

const BASE_URL = 'http://barrigarest.notasdovitor.top:3001'

export default {
    login (payload) {
        const endpoint = `${BASE_URL}/auth/signin`

        return axios.post(endpoint, payload)
    },
    cadastro (payload) {
        const endpoint = `${BASE_URL}/auth/signup`

        return axios.post(endpoint, payload)
    }
}