// @vendors
import { useMemo, useState } from 'react'

// @generated
import {
    GetPlayersFiltersQuery,
    Player_Category,
    useGetPlayersFiltersQuery,
    usePlayersQuery,
} from '~/generated/graphql'

// @interfaces
interface UsePlayersFilter {
    category: string | undefined
    handleClearFilter: () => void
    isLoading: boolean
    playerCategories: { label: string; value: string }[]
    playersDataFilters: GetPlayersFiltersQuery | undefined
    setCategory: (e: string) => void
    name: string | null
    setName: (e: string) => void
    names: string[]
    refetchPlayersFilters: () => void
}

const playerCategories = Object.keys(Player_Category).map(key => ({
    value: key,
    label: key,
}))

playerCategories.unshift({ value: '', label: 'Todos' })

export const usePlayersFilters = (): UsePlayersFilter => {
    const [category, setCategory] = useState('')

    const [playersDataFilters, setPlayersDataFilters] = useState<GetPlayersFiltersQuery | undefined>()

    const [name, setName] = useState('')

    const [names, setNames] = useState<string[]>([])

    const indexName = name.indexOf(' ')

    const filterName = name.slice(0, indexName)

    const handleClearFilter = (): void => {
        setCategory('')
        setName('')
    }

    const playersByCategory = (): Record<string, unknown> => {
        return {
            is: {
                category: {
                    in: Player_Category[category as keyof typeof Player_Category],
                },
            },
        }
    }

    const playerNames = (): object | undefined => {
        if (!name.length) return {}
    }

    const playersFiltersByName = (): Record<string, unknown> => {
        if (!name.length) return {}

        return {
            equals: filterName,
        }
    }

    const { data: playersName } = usePlayersQuery({ where: playerNames() })

    const {
        data: playersFilters,
        isLoading,
        isFetching,
        isRefetching,
        refetch: refetchPlayersFilters,
    } = useGetPlayersFiltersQuery({
        where: {
            name: playersFiltersByName(),
            playerSportData: playersByCategory(),
        },
    })

    useMemo(() => {
        const playersNames = playersName?.players.map(player => `${player.name} ${player.lastName}`)
        setPlayersDataFilters(playersFilters)
        setNames(playersNames || [])
    }, [playersDataFilters, playersFilters, playersName])

    return {
        category,
        handleClearFilter,
        isLoading: isLoading || isFetching || isRefetching,
        playerCategories,
        playersDataFilters,
        setCategory,
        name,
        setName,
        names,
        refetchPlayersFilters,
    }
}
