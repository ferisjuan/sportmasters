import { IImage } from '.'

export interface Country {
    flag: Flag
    id: string
    name: string
}

interface Flag extends IImage {
    id: string
    name: string
}
