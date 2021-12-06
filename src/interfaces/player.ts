import { Country } from '.'

enum PLAYER_CATEGORY {
    FIRST,
    SECOND,
    THIRD,
    FOURTH,
    FIFTH,
    SIXTH,
    SEVENTH,
    EIGHTH,
}

enum FIELD_POSITION {
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

enum PHYSICAL_CAPABILITIES {
    BALANCE,
    COORDINATION,
    FLEXIBILITY,
    RESISTANCE,
    SPEED,
    STRENGTH,
}

enum PHYSICAL_QUALITIES {
    AGILITY,
    DIRBLING,
    JUMPING,
}

enum PERSONAL_QUALITIES {
    FELLOWSHIP,
    PUNTUALITY,
    RESPONSABILITY,
    SOLIDARITY,
}

enum FAMILY_SUPPORT {
    BOTH_GRANDFATHERS,
    BOTH_PARENTS,
    FATHER,
    GRANDFATHER,
    GRANDMOTHER,
    MOTHER,
}

export interface Player {
    birthday: Date
    category: PLAYER_CATEGORY
    familySupport: FAMILY_SUPPORT[]
    fieldPosition: FIELD_POSITION
    height: number
    hobbies: string[]
    imageUrl: string
    IMC: number
    lastName: string
    name: string
    nationality: Country
    personalQualities: PERSONAL_QUALITIES[]
    physicalAttributes: PHYSICAL_CAPABILITIES[]
    physicalQualities: PHYSICAL_QUALITIES[]
    playerNumber: string
    playingPosition: string
    sportHistory: string
    weight: number
}
