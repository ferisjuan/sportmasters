import { IImage } from '.'
import { IPlayer } from './player'

enum LEAGUE_DIVISION {
    FIRST,
    SECOND,
}

enum LEAGUE_CATEGORY {
    FEMALE,
    MALE,
}

export interface League {
    id: string
    category: LEAGUE_CATEGORY
    division: LEAGUE_DIVISION
    image: IImage
    name: string
    teams: Team[]
}

export interface Team {
    id: string
    image: IImage
    name: string
    players: IPlayer[]
}
