import { useState } from 'react'
import { usePlayersCountQuery } from '../../../generated/graphql'

interface UsePlayersPagination {
    pages: number
    skip: number
    setSkip: (skip: number) => void
    take: number
}

const PLAYERS_BY_PAGE = 12

export const usePlayersPagination = (): UsePlayersPagination => {
    const [skip, setSkip] = useState(0)
    const [take] = useState(PLAYERS_BY_PAGE)

    const { data: playersCount } = usePlayersCountQuery()

    const count = playersCount?.aggregatePlayer._count?.id

    const pages = Math.ceil((count || 0) / PLAYERS_BY_PAGE)

    return {
        pages,
        setSkip,
        skip,
        take,
    }
}
