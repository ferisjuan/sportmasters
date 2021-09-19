import axios from 'axios'
import { baseURL } from 'src/constants/env-constants'

const http = axios.create({
    baseURL,
    responseType: 'json',
})

export { http }
