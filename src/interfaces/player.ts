import { Country, IImage } from '.'

export enum PLAYER_CATEGORY {
    NONE,
    FIRST,
    SECOND,
    THIRD,
    FOURTH,
    FIFTH,
    SIXTH,
    SEVENTH,
    EIGHTH,
}

export enum FIELD_POSITION {
    NONE,
    ATTACKING_MIDFIELDER,
    CENTER_BACK,
    CENTER_FORWARD,
    CENTER_MIDDLEFIELDER,
    DEFENSIVE_MIDFIELDER,
    GOAL_KEEPER,
    LEFT_FULLBACK,
    LEFT_MIDDLEFIELDER,
    RIGHT_FULLBACK,
    RIGHT_MIDDLEFIELDER,
    SWEEPER,
}

export enum PHYSICAL_CAPABILITIES {
    NONE,
    BALANCE,
    COORDINATION,
    FLEXIBILITY,
    RESISTANCE,
    SPEED,
    STRENGTH,
}

export enum PHYSICAL_QUALITIES {
    NONE,
    AGILITY,
    DIRBLING,
    JUMPING,
}

export enum PERSONAL_QUALITIES {
    NONE,
    FELLOWSHIP,
    PUNTUALITY,
    RESPONSABILITY,
    SOLIDARITY,
}

export enum FAMILY_SUPPORT {
    NONE,
    BOTH_GRANDFATHERS,
    BOTH_PARENTS,
    FATHER,
    GRANDFATHER,
    GRANDMOTHER,
    MOTHER,
}

export interface IPlayer {
    birthday: Date
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
    teamId: string
    weight: number
}
