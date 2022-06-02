// @generated
import { Missed_Reason, Sports, useCreatePlayerAttendanceMutation, useGetPlayersQuery } from '~/generated/graphql'

// @hooks
import { useStores } from '~/hooks'

interface AddPlayerMissattendance {
    email: string
    sport: string
    reason: string
}

interface PlayerData {
    names: string
    playerEmail: string
    sport?: Sports[]
    shirtNumber?: string | number | null
    missedAttendances?: number
}

interface UseAttendance {
    isLoading: boolean
    headers: string[]
    playerData: PlayerData[] | undefined
    handleAddPlayerMissattendance: (e: AddPlayerMissattendance) => void
}

export const useAttendance = (): UseAttendance => {
    const { userStore } = useStores()

    const {
        data: players,
        isFetching,
        isLoading,
    } = useGetPlayersQuery({
        where: {
            schoolId: {
                equals: userStore.schoolId,
            },
        },
    })

    const headers = ['Nombres', 'Email', 'Deportes', 'Camiseta', 'Faltas', 'Acciones']

    const playerData: PlayerData[] | undefined = players?.players.map(player => ({
        names: `${player.name} ${player.lastName}`,
        playerEmail: player.playerEmail,
        sport: player.playerSportData?.sport,
        shirtNumber: player.playerSportData?.shirtNumber,
        missedAttendances: player._count?.playerAttendances,
    }))

    const { mutate: addPlayerMissattendance } = useCreatePlayerAttendanceMutation()

    const handleAddPlayerMissattendance = ({ email, reason, sport }: AddPlayerMissattendance): void => {
        console.log('🚀🚀🚀 ~ file: useAttendance.ts ~ line 64 ~ handleAddPlayerMissattendance ~ e', {
            email,
            reason,
            sport,
        })
        return

        const now = new Date()
        addPlayerMissattendance({
            data: {
                player: {
                    connect: {
                        playerEmail: email,
                    },
                },
                missAttendanceDate: now,
                sport: sport as Sports,
                reason: reason as Missed_Reason,
            },
        })
    }

    return {
        isLoading: isLoading || isFetching,
        headers,
        playerData,
        handleAddPlayerMissattendance,
    }
}
