import axios from 'axios'
const API_ENVS = {
    production: '',
    development: '',
    local: 'http://localhost:3000'
}
const httpClient = axios.create({
    baseURL: API_ENVS.local
})