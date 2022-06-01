// @generated
import { Reason, Sports, useCreatePlayerAttendanceMutation, usePlayerAttendancesQuery } from '~/generated/graphql'

// @hooks
import { useStores } from '~/hooks'

// @utils
import { parseAttendanceData } from '~/utils/attendance'

interface UseAttendance {
    isLoading: boolean
    headers: string[]
    tData: Record<string, string>[]
    handleAddPlayerMissattendance: () => void
}

export const useAttendance = (): UseAttendance => {
    const { playerStore } = useStores()

    const {
        data: playerAttendaces,
        isFetching,
        isLoading,
    } = usePlayerAttendancesQuery({
        where: {
            player: {
                is: {
                    playerEmail: {
                        equals: playerStore.playerEmail,
                    },
                },
            },
        },
    })

    const headers = ['attendanceDate', 'reason', 'sport']

    const tData = playerAttendaces?.playerAttendances ? parseAttendanceData(playerAttendaces?.playerAttendances) : []

    const { mutate: addPlayerMissattendance } = useCreatePlayerAttendanceMutation()

    const handleAddPlayerMissattendance = (): void => {
        const now = new Date()

        addPlayerMissattendance({
            data: {
                player: {
                    connect: {
                        playerEmail: playerStore.playerEmail,
                    },
                },
                attendanceDate: now,
                sport: Sports.Baseball,
                reason: Reason.Medical,
            },
        })
    }

    return {
        isLoading: isLoading || isFetching,
        headers,
        tData,
        handleAddPlayerMissattendance,
    }
}
