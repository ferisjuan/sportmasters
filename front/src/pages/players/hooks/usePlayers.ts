// @generated
import { usePlayersCountQuery } from '~/generated/graphql'

// @hooks
import { useStores } from '~/hooks'

interface UsePlayers {
    handleOnAddPlayer: () => void
    handleOnPaginationChange: (page: number) => void
    isPlayersLoading: boolean
    pages: number
    setSkip: (skip: number) => void
    skip: number
}

const PLAYERS_BY_PAGE = 12

export const usePlayers = (): UsePlayers => {
    const { playersStore } = useStores()

    const setSkip = (skip: number): void => {
        playersStore.paginationSkip = skip
    }

    const { data: playersCount, isLoading: isPlayersLoading, isFetching: isPlayersFetching } = usePlayersCountQuery()

    const count = playersCount?.aggregatePlayer._count?.id

    const pages = Math.ceil((count || 0) / PLAYERS_BY_PAGE)

    const handleOnAddPlayer = (): void => {
        playersStore.isAddPlayerModalOpen = true
    }

    const handleOnPaginationChange = (page: number): void => {
        playersStore.paginationSkip = page
    }

    return {
        handleOnAddPlayer,
        handleOnPaginationChange,
        isPlayersLoading: isPlayersLoading || isPlayersFetching,
        pages,
        setSkip,
        skip: playersStore.paginationSkip,
    }
}
