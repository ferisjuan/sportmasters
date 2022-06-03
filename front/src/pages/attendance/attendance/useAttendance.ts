// @generated
import { useMemo, useState } from 'react'
import {
    Missed_Reason,
    Player_Category,
    Sports,
    useCreatePlayerAttendanceMutation,
    useGetPlayersQuery,
} from '~/generated/graphql'

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
    shirtNumber?: string | null
    missedAttendances?: number
}

interface UseAttendance {
    categoryFilter: string | undefined
    isLoading: boolean
    headers: string[]
    players: PlayerData[] | undefined
    handleAddPlayerMissattendance: (e: AddPlayerMissattendance) => void
    setCategoryFilter: (e: string) => void
}

const headers = ['Nombres', 'Email', 'Deportes', 'Camiseta', 'Categoria', 'Faltas', 'Acciones']

export const useAttendance = (): UseAttendance => {
    const { userStore } = useStores()

    const [players, setPlayers] = useState<PlayerData[]>()
    const [categoryFilter, setCategoryFilter] = useState('')

    const playerSportData = (): Record<string, unknown> => {
        if (!categoryFilter.length) return {}

        return {
            is: {
                category: {
                    equals: Player_Category[categoryFilter as keyof typeof Player_Category],
                },
            },
        }
    }

    const {
        data: playersData,
        isFetching,
        isLoading,
    } = useGetPlayersQuery({
        where: {
            schoolId: {
                equals: userStore.schoolId,
            },
            playerSportData: playerSportData(),
        },
    })
    console.log('🚀🚀🚀 ~ file: useAttendance.ts ~ line 69 ~ useAttendance ~ playersData', playersData)

    useMemo(() => {
        const _players = playersData?.players.map(player => ({
            names: `${player.name} ${player.lastName}`,
            playerEmail: player.playerEmail,
            sport: player.playerSportData?.sport,
            shirtNumber: player.playerSportData?.shirtNumber,
            category: player.playerSportData?.category,
            missedAttendances: player._count?.playerAttendances,
        }))

        setPlayers(_players)
    }, [categoryFilter])

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
        categoryFilter,
        handleAddPlayerMissattendance,
        headers,
        isLoading: isLoading || isFetching,
        players,
        setCategoryFilter,
    }
}
