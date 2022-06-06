// @vendors
import { useEffect, useState } from 'react'

// @generated
import { Field_Position, GetPlayersFiltersQuery, Player_Category, useGetPlayersFiltersQuery } from '~/generated/graphql'

// @interfaces
interface UsePlayersFilter {
    category: string | undefined
    fieldPosition: string | undefined
    fieldPositions: { label: string; value: string }[]
    handleClearFilter: () => void
    isLoading: boolean
    playerCategories: { label: string; value: string }[]
    playersDataFilters: GetPlayersFiltersQuery | undefined
    setCategory: (e: string) => void
    setFieldPosition: (e: string) => void
}

const fieldPositions = Object.keys(Field_Position).map(key => ({ value: key, label: key }))

const playerCategories = Object.keys(Player_Category).map(key => ({
    value: key,
    label: key,
}))

fieldPositions.unshift({ value: '', label: 'Todos' })
playerCategories.unshift({ value: '', label: 'Todos' })

export const usePlayersFilters = (): UsePlayersFilter => {
    const [fieldPosition, setFieldPosition] = useState('')

    const [category, setCategory] = useState('')

    const handleClearFilter = (): void => {
        setFieldPosition('')
        setCategory('')
    }

    const [playersDataFilters, setPlayersDataFilters] = useState<GetPlayersFiltersQuery | undefined>()

    const playersData = (): Record<string, unknown> => {
        return {
            is: {
                fieldPosition: {
                    in: Field_Position[fieldPosition as keyof typeof Field_Position],
                },
                category: {
                    in: Player_Category[category as keyof typeof Player_Category],
                },
            },
        }
    }

    const {
        data: playersFilters,
        isLoading,
        isFetching,
    } = useGetPlayersFiltersQuery({
        where: {
            playerSportData: playersData(),
        },
    })

    useEffect(() => {
        setPlayersDataFilters(playersFilters)
    }, [category, fieldPosition, playersDataFilters, playersFilters])

    return {
        category,
        fieldPosition,
        fieldPositions,
        handleClearFilter,
        isLoading: isLoading || isFetching,
        playerCategories,
        playersDataFilters,
        setCategory,
        setFieldPosition,
    }
}