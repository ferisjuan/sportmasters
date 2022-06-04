// @generated
import { useMemo, useState } from 'react'
import { Player_Category, useGetPlayersQuery } from '~/generated/graphql'

// @hooks
import { useStores } from '~/hooks'
import { PlayerData } from './types'

interface UseAttendance {
    categoryFilter: string | undefined
    handleClearFilter: () => void
    headers: string[]
    isLoading: boolean
    players: PlayerData[] | undefined
    refetchPlayers: () => void
    setCategoryFilter: (e: string) => void
}

const headers = ['Nombres', 'Email', 'Deportes', 'Camiseta', 'Categoria', 'Faltas', 'Acciones']

export const useAttendance = (): UseAttendance => {
    const { userStore } = useStores()

    const [players, setPlayers] = useState<PlayerData[]>()
    const [categoryFilter, setCategoryFilter] = useState('')

    const handleClearFilter = (): void => setCategoryFilter('')

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
        refetch: refetchPlayers,
        isRefetching,
    } = useGetPlayersQuery({
        where: {
            schoolId: {
                equals: userStore.schoolId,
            },
            playerSportData: playerSportData(),
        },
    })

    useMemo(() => {
        const _players: PlayerData[] | undefined = playersData?.players.map(player => ({
            names: `${player.name} ${player.lastName}`,
            playerEmail: player.playerEmail,
            sports: player.playerSportData?.sport,
            shirtNumber: player.playerSportData?.shirtNumber,
            category: player.playerSportData?.category,
            missedAttendances: player._count?.playerAttendances,
        }))

        setPlayers(_players)
    }, [categoryFilter, playersData])

    return {
        categoryFilter,
        handleClearFilter,
        headers,
        isLoading: isLoading || isFetching || isRefetching,
        players,
        refetchPlayers,
        setCategoryFilter,
    }
}
