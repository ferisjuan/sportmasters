// @vendors
import { useEffect, useState } from 'react'

// @generated
import { Field_Position, GetPlayersFiltersQuery, Player_Category, useGetPlayersFiltersQuery } from '~/generated/graphql'

// @interfaces
interface UsePlayersFilter {
    isLoading: boolean
    playersDataFilters: GetPlayersFiltersQuery | undefined
    setFieldPosition: (e: string) => void
    setCategory: (e: string) => void
    setStatus: (e: string) => void
    status: string | undefined
    category: string | undefined
    fieldPosition: string | undefined
    handleClearFilter: () => void
}

export const usePlayersFilters = (): UsePlayersFilter => {
    const [fieldPosition, setFieldPosition] = useState('')

    const [category, setCategory] = useState('')

    const [status, setStatus] = useState('')

    const handleClearFilter = () => {
        setFieldPosition('')
        setCategory('')
        setStatus('')
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
    }, [playersFilters, fieldPosition, category, playersDataFilters])

    return {
        playersDataFilters,
        isLoading: isLoading || isFetching,
        setCategory,
        setFieldPosition,
        setStatus,
        status,
        category,
        fieldPosition,
        handleClearFilter,
    }
}
