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
    division: LEAGUE_DIVISION
    name: string
    teams: Team[]
    category: LEAGUE_CATEGORY
}

export interface Team {
    id: string
    name: string
    players: IPlayer[]
}
