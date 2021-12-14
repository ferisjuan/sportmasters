import {
    PLAYER_CATEGORY,
    FAMILY_SUPPORT,
    FIELD_POSITION,
    PERSONAL_QUALITIES,
    PHYSICAL_CAPABILITIES,
    PHYSICAL_QUALITIES,
} from '../enums'

import { IImage } from '.'

export interface IPlayer {
    birthday: FirebaseTimestamp
    category: PLAYER_CATEGORY
    familySupport: FAMILY_SUPPORT[]
    fieldPosition: FIELD_POSITION
    height: number
    hobbies: string[]
    id: string
    image: IImage
    IMC: number
    lastName: string
    name: string
    placeOfBirth: string
    personalQualities: PERSONAL_QUALITIES[]
    physicalCapabilities: PHYSICAL_CAPABILITIES[]
    physicalQualities: PHYSICAL_QUALITIES[]
    playerNumber: string
    sportHistory: string
    team: IPlayerTeam
    weight: number
}

interface FirebaseTimestamp {
    seconds: number
    nanoseconds: number
}

interface IPlayerTeam {
    id: string
    name: string
    image: IImage
}
