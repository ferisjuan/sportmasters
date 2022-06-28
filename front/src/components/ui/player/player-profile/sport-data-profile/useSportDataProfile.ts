// @vendors
import { useEffect, useState } from 'react'

// @hooks
import { useStores } from '~/hooks'

// @generated
import {
    Field_Position,
    Handedness,
    Player_Category,
    Sports,
    usePlayerSportDataQuery,
    useUpdatePlayerMutation,
} from '~/generated/graphql'

// @utils
import { showSMNotification } from '~/utils'

// @interface
interface UsePersonalData {
    handleUpdateSportPlayerData: () => void
    sport?: Sports[]
    admissionDate?: Date
    category?: Player_Category | null
    fieldPosition?: Field_Position | null
    handedness?: Handedness
    previousSchool?: string | null
    shirtNumber?: string | null
    observations?: string | null
    setSport: (e: Sports[]) => void
    setAdmissionDate: (e: Date) => void
    setCategory: (e: Player_Category) => void
    setFieldPosition: (e: Field_Position) => void
    setHandedness: (e: Handedness) => void
    setPreviousSchool: (e: string) => void
    setShirtNumber: (e: string) => void
    setObservations: (e: string) => void
}

export const useUpdateSportDataProfile = (): UsePersonalData => {
    const { playerStore } = useStores()

    const { data: sportDataPlayer, refetch: refecthMedicalData } = usePlayerSportDataQuery({
        where: { playerEmail: playerStore.playerEmail },
    })

    const [sport, setSport] = useState<Sports[] | undefined>()
    const [admissionDate, setAdmissionDate] = useState<Date>()
    const [category, setCategory] = useState<Player_Category | null>()
    const [fieldPosition, setFieldPosition] = useState<Field_Position | null>()
    const [handedness, setHandedness] = useState<Handedness>()
    const [previousSchool, setPreviousSchool] = useState<string | null>()
    const [observations, setObservations] = useState<string | null>()
    const [shirtNumber, setShirtNumber] = useState<string | null>()

    const { mutate: updatePlayerData } = useUpdatePlayerMutation({
        onSuccess: (): void => {
            refecthMedicalData().then((): void => {
                showSMNotification('Datos deportivos actualizados correctamente', 'INFO', true)
            })
        },
    })

    useEffect(() => {
        setSport(sportDataPlayer?.player?.playerSportData?.sport)
        setObservations(sportDataPlayer?.player?.playerSportData?.observations)
        setAdmissionDate(sportDataPlayer?.player?.playerSportData?.admissionDate)
        setShirtNumber(sportDataPlayer?.player?.playerSportData?.shirtNumber)
        setCategory(sportDataPlayer?.player?.playerSportData?.category)
        setFieldPosition(sportDataPlayer?.player?.playerSportData?.fieldPosition)
        setHandedness(sportDataPlayer?.player?.playerSportData?.handedness)
        setPreviousSchool(sportDataPlayer?.player?.playerSportData?.previousSchool)
    }, [sportDataPlayer])

    const handleUpdateSportPlayerData = (): void => {
        if (!sport?.length) return

        updatePlayerData({
            data: {
                playerSportData: {
                    upsert: {
                        update: {
                            sport: {
                                set: sport,
                            },
                            admissionDate: {
                                set: admissionDate,
                            },
                            handedness: {
                                set: handedness,
                            },
                            category: {
                                set: category,
                            },
                            observations: {
                                set: observations,
                            },
                            fieldPosition: {
                                set: fieldPosition,
                            },
                            previousSchool: {
                                set: previousSchool,
                            },
                            shirtNumber: {
                                set: shirtNumber,
                            },
                        },
                        create: {
                            sport: {
                                set: sport,
                            },
                            admissionDate: admissionDate,
                            handedness: handedness as Handedness,
                            shirtNumber: shirtNumber,
                            observations: observations,
                            fieldPosition: fieldPosition,
                            previousSchool: previousSchool,
                            category: category,
                        },
                    },
                },
            },
            where: {
                playerEmail: playerStore.playerEmail,
            },
        })
    }

    return {
        sport,
        setSport,
        observations,
        handedness,
        setHandedness,
        fieldPosition,
        setFieldPosition,
        category,
        setCategory,
        setShirtNumber,
        shirtNumber,
        admissionDate,
        setAdmissionDate,
        setPreviousSchool,
        previousSchool,
        handleUpdateSportPlayerData,
        setObservations,
    }
}
