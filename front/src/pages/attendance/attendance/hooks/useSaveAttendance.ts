// @generated
import { useState } from 'react'
import { Missed_Reason, Sports, useCreatePlayerAttendanceMutation } from '~/generated/graphql'
import { showSMNotification } from '../../../../utils'
import { PlayerData } from './types'

interface UseSaveAttendance {
    closeModal: () => void
    handleAddPlayerMissattendance: () => void
    handleOpenModal: (_playerData: PlayerData) => void
    isModalOpen: boolean
    missedReason: string
    playerName: string
    setMissedReason: (e: string) => void
}

export const useSaveAttendance = (): UseSaveAttendance => {
    const [missedReason, setMissedReason] = useState('')
    const [playerData, setPlayerData] = useState<PlayerData>()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const closeModal = (): void => {
        setIsModalOpen(false)
        setMissedReason('')
        setPlayerData(undefined)
    }

    const { mutate: addPlayerMissattendance } = useCreatePlayerAttendanceMutation({
        onSuccess: (): void => {
            showSMNotification('Se ha guardado la falta', 'INFO', false)
        },
    })

    const handleOpenModal = (_playerData: PlayerData): void => {
        if (!_playerData) return

        setIsModalOpen(true)
        setPlayerData(_playerData)
    }

    const handleAddPlayerMissattendance = (): void => {
        if (!missedReason.length) return

        const now = new Date()
        addPlayerMissattendance({
            data: {
                player: {
                    connect: {
                        playerEmail: playerData?.playerEmail,
                    },
                },
                missAttendanceDate: now,
                sport: Sports.Soccer,
                reason: Missed_Reason[missedReason as keyof typeof Missed_Reason],
            },
        })

        closeModal()
    }

    return {
        closeModal,
        handleAddPlayerMissattendance,
        handleOpenModal,
        isModalOpen,
        missedReason,
        playerName: playerData?.names || '',
        setMissedReason,
    }
}
