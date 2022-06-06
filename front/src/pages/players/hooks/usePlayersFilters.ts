// @vendors
import { useEffect, useState } from 'react'

// @generated
import { Field_Position, GetPlayersFiltersQuery, Player_Category, useGetPlayersFiltersQuery } from '~/generated/graphql'
import { useTranslation } from 'react-i18next'

// @interfaces
interface UsePlayersFilter {
    isLoading: boolean
    playersDataFilters: GetPlayersFiltersQuery | undefined
    setFieldPosition: (e: string) => void
    setCategory: (e: string) => void
    category: string | undefined
    fieldPosition: string | undefined
    handleClearFilter: () => void
    fieldPositions: { label: string; value: string }[]
    playerCategories: { label: string; value: string }[]
}

export const usePlayersFilters = (): UsePlayersFilter => {
    const { t } = useTranslation(['fieldPosition', 'categories'])

    const fieldPositions = Object.keys(Field_Position).map(key => ({ value: key, label: `${t(key)}` }))

    const playerCategories = Object.keys(Player_Category).map(key => ({
        value: key,
        label: `${t(key, { ns: 'categories' })}`,
    }))

    fieldPositions.unshift({ value: '', label: 'Todos' })
    playerCategories.unshift({ value: '', label: 'Todos' })

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
    }, [playersFilters, fieldPosition, category, playersDataFilters])

    return {
        playersDataFilters,
        fieldPositions,
        playerCategories,
        isLoading: isLoading || isFetching,
        setCategory,
        setFieldPosition,
        category,
        fieldPosition,
        handleClearFilter,
    }
}
