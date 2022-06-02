// @vendors
import { useEffect, useState } from 'react'

// @generated
import { usePlayersGridQuery, Field_Position, PlayersGridQuery } from '~/generated/graphql'

// @interfaces
interface usePlayerFilter {
    isLoading: boolean
    playersGrid: Record<string, string>[] | undefined
    handleFilters: (e: Field_Position) => void
}

export const usePlayerFilters = (): usePlayerFilter => {
    const { data: players, isFetching, isLoading } = usePlayersGridQuery()

    const [plar, setPlar] = useState(players?.players)
    console.log('🚀 ~ file: usePlayers.ts ~ line 18 ~ usePlayerFilters ~ plar', plar?.players)

    const handleFilters = (fieldPosition: Field_Position): void => {
        const { data: playersFil } = usePlayersGridQuery({
            where: {
                playerSportData: {
                    is: {
                        fieldPosition: {
                            equals: fieldPosition,
                        },
                    },
                },
            },
        })

        useEffect(() => {
            setPlar(playersFil)
        }, [playersFil])
    }

    const playersGrid = plar?.players

    return { playersGrid, handleFilters, isLoading: isLoading || isFetching }
}
