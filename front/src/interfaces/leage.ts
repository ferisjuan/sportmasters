import { IImage } from '.'
import { LEAGUE_CATEGORY } from '../enums/leage-category'
import { LEAGUE_DIVISION } from '../enums/league-division'
import { ITeam } from './team'

export interface ILeague {
    id: string
    category: LEAGUE_CATEGORY
    division: LEAGUE_DIVISION
    image: IImage
    name: string
    teams: ITeam[]
}
