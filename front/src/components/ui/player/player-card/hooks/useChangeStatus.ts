// @generated
import { Player_Status, useUpdatePlayerMutation } from '~/generated/graphql'
import { queryClient } from '~/queries'
import { useState } from 'react'

// @types
type PlayerData = {
    name: string
    playerStatus?: Player_Status | null
    playerEmail: string
}

// @interface
interface UseChangeStatus {
    handleChangeStatus: () => void
    changeStatus: string
    setChangeStatus: (e: string) => void
    handleOpenModal: (_playerData: PlayerData) => void
    isModalOpen: boolean
    closeModal: () => void
    playerName: string
}

export const useChangeStatus = (refetchPlayers: () => void): UseChangeStatus => {
    const [playerData, setPlayerData] = useState<PlayerData>()
    const [changeStatus, setChangeStatus] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

    const closeModal = (): void => {
        setIsModalOpen(false)
        setPlayerData(undefined)
        setChangeStatus('')
    }

    const handleOpenModal = (_playerData: PlayerData): void => {
        if (!_playerData) return
        setIsModalOpen(true)
        setPlayerData(_playerData)
    }

    const { mutate: updateStatus } = useUpdatePlayerMutation({
        onMutate: async data => {
            await queryClient.cancelQueries(['players', data.data.playerStatus])

            const previousStatus = queryClient.getQueryData(['players', data.data.playerStatus])

            queryClient.setQueryData(['players', data.data.playerStatus], data.data.playerStatus)

            return { previousStatus }
        },

        onSettled: (data, error, variables, context) => {
            if (error) {
                queryClient.setQueryData('players', context?.previousStatus)
            }
            refetchPlayers()
            queryClient.invalidateQueries(['players', data?.updatePlayer?.id])
        },
    })

    const handleChangeStatus = (): void => {
        if (!playerData?.playerEmail) return

        updateStatus({
            where: { playerEmail: playerData?.playerEmail },
            data: {
                playerStatus: {
                    set: Player_Status[changeStatus as keyof typeof Player_Status],
                },
            },
        })
    }

    return {
        handleChangeStatus,
        changeStatus,
        setChangeStatus,
        handleOpenModal,
        isModalOpen,
        closeModal,
        playerName: playerData?.name || '',
    }
}
