// @generated
import { Player_Status, useUpdatePlayerMutation } from '~/generated/graphql'

// @types
type PlayerData = {
    playerStatus?: Player_Status | null
    playerEmail: string
}

// @interface
interface UseChangeStatus {
    handleChangeStatus: (playerCards: PlayerData) => void
}

export const useChangeStatus = (refetchPlayers: () => void): UseChangeStatus => {
    const { mutate: updateStatus } = useUpdatePlayerMutation({
        onSuccess: () => {
            refetchPlayers()
        },
    })

    const handleChangeStatus = (_PlayerData: PlayerData): void => {
        if (!_PlayerData) return

        updateStatus({
            where: { playerEmail: _PlayerData.playerEmail },
            data: {
                playerStatus: {
                    set:
                        _PlayerData.playerStatus === Player_Status.Active
                            ? Player_Status.Inactive
                            : Player_Status.Active,
                },
            },
        })
    }

    return {
        handleChangeStatus,
    }
}
