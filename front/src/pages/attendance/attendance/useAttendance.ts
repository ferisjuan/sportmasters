// @generated
import {
    Reason,
    Sports,
    useCreatePlayerAttendanceMutation,
    usePlayerAttendancesBySchoolAndCategoriyQuery,
} from '~/generated/graphql'

// @hooks
import { useStores } from '~/hooks'

// @utils
import { getDateMedWeekDay } from '~/utils'

interface UseAttendance {
    isLoading: boolean
    headers: string[]
    tData: Record<string, string>[] | undefined
    handleAddPlayerMissattendance: (e: any) => void
}

export const useAttendance = (): UseAttendance => {
    const { userStore } = useStores()

    const {
        data: playerAttendaces,
        isFetching,
        isLoading,
    } = usePlayerAttendancesBySchoolAndCategoriyQuery({
        where: {
            schoolId: {
                equals: userStore.schoolId,
            },
        },
    })

    const headers = ['name', 'lastName', 'email', 'sport', 'reason', 'Date', 'Actions']

    const tData = playerAttendaces?.playerAttendances.map(attendance => ({
        name: attendance.player.name,
        lastName: attendance.player.lastName,
        email: attendance.player.playerEmail,
        sport: attendance?.sport || '',
        reason: attendance?.reason || '',
        attendanceDate: getDateMedWeekDay(attendance?.missAttendanceDate || ''),
    }))

    const { mutate: addPlayerMissattendance } = useCreatePlayerAttendanceMutation()

    const handleAddPlayerMissattendance = (e): void => {
        console.log('🚀🚀🚀 ~ file: useAttendance.ts ~ line 66 ~ handleAddPlayerMissattendance ~ e', e)
        return

        const now = new Date()
        addPlayerMissattendance({
            data: {
                player: {
                    connect: {
                        playerEmail: playerEmail,
                    },
                },
                missAttendanceDate: now,
                sport: sport,
                reason: reason,
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
