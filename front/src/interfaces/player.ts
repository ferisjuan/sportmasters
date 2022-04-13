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
    guardianEmail: string
    guardianId: string
    guardianIdType: string
    guardianLastName: string
    guardianName: string
    guardianPhone: string
    guardianType: string
    height: number
    hobbies: string[]
    id: string
    image: IImage
    IMC: number
    lastName: string
    name: string
    personalQualities: PERSONAL_QUALITIES[]
    physicalCapabilities: PHYSICAL_CAPABILITIES[]
    physicalQualities: PHYSICAL_QUALITIES[]
    placeOfBirth: string
    playerBirthday?: Date
    playerEmail: string
    playerId: string
    playerIdType: string
    playerNumber: string
    playerPhone: string
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
