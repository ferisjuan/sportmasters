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
    handleAddPlayerMissattendance: () => void
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

    const headers = ['attendanceDate', 'reason', 'sport']

    const tData = playerAttendaces?.playerAttendances.map(miss => ({
        attendanceDate: getDateMedWeekDay(miss?.missAttendanceDate || ''),
        // reason: miss?.reason || '',
        sport: miss?.sport || '',
    }))

    const { mutate: addPlayerMissattendance } = useCreatePlayerAttendanceMutation()

    const handleAddPlayerMissattendance = (): void => {
        const now = new Date()

        // addPlayerMissattendance({
        //     data: {
        //         player: {
        //             connect: {
        //                 playerEmail: playerStore.playerEmail,
        //             },
        //         },
        //         missAttendanceDate: now,
        //         sport: Sports.Baseball,
        //         reason: Reason.Medical,
        //     },
        // })
    }

    return {
        isLoading: isLoading || isFetching,
        headers,
        tData,
        handleAddPlayerMissattendance,
    }
}
