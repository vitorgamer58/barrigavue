import axios from "axios";
import provedor from "../provedor";

const BASE_URL = process.env.BASE_URL

axios.interceptors.request.use(function (config) {
    const token = provedor.state.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, function (err) {
    return Promise.reject(err)
})

export default {
    login(payload) {
        const endpoint = `${BASE_URL}/auth/signin`

        return axios.post(endpoint, payload)
    },
    cadastro(payload) {
        const endpoint = `${BASE_URL}/auth/signup`

        return axios.post(endpoint, payload)
    },
    getSaldo() {
        const endpoint = `${BASE_URL}/v1/balance`

        return axios.get(endpoint)
    },
    getContas() {
        const endpoint = `${BASE_URL}/v1/accounts`

        return axios.get(endpoint)
    },
    criarConta(payload) {
        const endpoint = `${BASE_URL}/v1/accounts`

        return axios.post(endpoint, payload)
    },
    deletarConta(id) {
        const endpoint = `${BASE_URL}/v1/accounts/${id}`

        return axios.delete(endpoint)
    },
    obterTransacoes() {
        const endpoint = `${BASE_URL}/v1/transactions`

        return axios.get(endpoint)
    },
    obterTransacao(id) {
        const endpoint = `${BASE_URL}/v1/transactions/${id}`

        return axios.get(endpoint)
    },
    editarTransacao(id, payload) {
        const endpoint = `${BASE_URL}/v1/transactions/${id}`

        return axios.put(endpoint, payload)
    },
    deletarTransacao(id) {
        const endpoint = `${BASE_URL}/v1/transactions/${id}`

        return axios.delete(endpoint)
    },
    criarTransacao(payload) {
        const endpoint = `${BASE_URL}/v1/transactions`

        return axios.post(endpoint, payload)
    }
}