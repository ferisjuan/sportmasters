// @generated
import {
    Missed_Reason,
    Sports,
    useCreatePlayerAttendanceMutation,
    usePlayerAttendancesQuery,
} from '~/generated/graphql'

// @hooks
import { useStores } from '~/hooks'

// @utils
import { getDateMedWeekDay } from '~/utils'

interface UseAttendance {
    isLoading: boolean
    headers: string[]
    tData: Record<string, string>[] | undefined
    handleAddPlayerMissattendance: () => void
}

export const useAttendance = (): UseAttendance => {
    const { playerStore, userStore } = useStores()

    const {
        data: playerAttendaces,
        isFetching,
        isLoading,
    } = usePlayerAttendancesQuery({
        where: {
            schoolId: {
                equals: userStore.schoolId,
            },
            playerId: {
                equals: playerStore.player.id,
            },
        },
    })

    const headers = ['attendanceDate', 'reason', 'sport']

    const tData = playerAttendaces?.playerAttendances.map(miss => ({
        attendanceDate: getDateMedWeekDay(miss?.missAttendanceDate || ''),
        reason: miss?.reason || '',
        sport: miss?.sport || '',
    }))

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
                School: {
                    connect: {
                        email: userStore.schoolEmail,
                    },
                },
                missAttendanceDate: now,
                sport: Sports.Baseball,
                reason: Missed_Reason.Medical,
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
