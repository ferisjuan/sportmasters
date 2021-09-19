import { AxiosResponse } from 'axios'
import { http } from './axios'

export const getUser = (): Promise<AxiosResponse> => http('/image/random')
