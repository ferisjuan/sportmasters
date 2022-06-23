// @generated
import { Field_Position, Player_Category } from '~/generated/graphql'

interface PlayerMedicalData {
    height?: string
    weight?: string
}

interface PlayerData {
    birthday?: string | null
}

interface PlayerSportData {
    category?: Player_Category | null
    fieldPosition?: Field_Position | null
    shirtNumber?: string | null
}

interface PlayerCards {
    id?: string
    image?: string | null
    lastName?: string
    name?: string
    playerData?: PlayerData | null
    playerEmail?: string
    playerMedical?: PlayerMedicalData | null
    playerPaymentStatus?: string
    playerSportData?: PlayerSportData | null
    playerStatus?: string
}

export interface PlayerCardProps {
    players: PlayerCards[] | undefined
}
