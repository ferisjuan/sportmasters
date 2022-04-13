import { IImage } from '.'

export interface ITeam {
    id: string
    image: IImage
    name: string
    playerIds?: string[]
}
