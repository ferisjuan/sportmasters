import axios from 'axios'
import { baseURL } from '../constants/queries'

const http = axios.create({
    baseURL,
    responseType: 'json',
})

export { http }
