// @vendors
import { useEffect, useState } from 'react'

// @hooks
import { useStores } from '~/hooks'

// @generated
import { usePlayerMedicalDataQuery, useUpdatePlayerMutation } from '~/generated/graphql'

// @interface
interface UsePersonalData {
    handleUpdatePlayerMedical: () => void
    healthProvider?: string
    bloodType?: string
    height?: string
    weight?: string
    imc?: string
    diseases?: string[] | string
    allergies?: string[] | string
    surgeries?: string
    injuries?: string
    observations?: string | null
    setHealthProvider: (e: string) => void
    setBloodType: (e: string) => void
    setHeight: (e: string) => void
    setWeight: (e: string) => void
    setImc: (e: string) => void
    setDiseases: (e: string) => void
    setAllergies: (e: string) => void
    setSurgeries: (e: string) => void
    setInjuries: (e: string) => void
    setObservations: (e: string) => void
}

export const useUpdatePersonalData = (): UsePersonalData => {
    const { playerStore } = useStores()

    const { data: playerMedicalData } = usePlayerMedicalDataQuery({
        where: { playerEmail: playerStore.playerEmail },
    })

    const [healthProvider, setHealthProvider] = useState<string | undefined>('')
    const [bloodType, setBloodType] = useState<string | undefined>('')
    const [height, setHeight] = useState<string | undefined>('')
    const [weight, setWeight] = useState<string>()
    const [imc, setImc] = useState<string>()
    const [diseases, setDiseases] = useState<string[] | string>()
    const [allergies, setAllergies] = useState<string | string[]>()
    const [surgeries, setSurgeries] = useState<string>()
    const [injuries, setInjuries] = useState<string>()
    const [observations, setObservations] = useState<string | null>()

    const { mutate: updatePlayerData } = useUpdatePlayerMutation({
        onSuccess: (): void => {
            console.log('Succes')
        },
    })

    useEffect(() => {
        setHealthProvider(playerMedicalData?.player?.playerMedical?.healthProvider)
        setBloodType(playerMedicalData?.player?.playerMedical?.bloodType)
        setHeight(playerMedicalData?.player?.playerMedical?.height)
        setWeight(playerMedicalData?.player?.playerMedical?.weight)
        setImc(playerMedicalData?.player?.playerMedical?.IMC)
        setDiseases(playerMedicalData?.player?.playerMedical?.diseases)
        setAllergies(playerMedicalData?.player?.playerMedical?.alergies)
        setSurgeries(playerMedicalData?.player?.playerSurgeries?.name)
        setInjuries(playerMedicalData?.player?.playerInjuries?.name)
        setObservations(playerMedicalData?.player?.playerMedical?.observations)
    }, [playerMedicalData])

    const handleUpdatePlayerMedical = (): void => {
        if (!healthProvider?.length) return

        updatePlayerData({
            data: {
                playerMedical: {
                    upsert: {
                        update: {
                            bloodType: {
                                set: bloodType,
                            },
                            diseases: {
                                set: diseases as string[],
                            },
                            healthProvider: {
                                set: healthProvider,
                            },
                            observations: {
                                set: observations,
                            },
                            height: {
                                set: height,
                            },
                            weight: {
                                set: weight,
                            },
                            IMC: {
                                set: imc,
                            },
                            alergies: {
                                push: allergies as string[],
                            },
                        },
                        create: {
                            weight: weight || '',
                            height: height || '',
                            IMC: imc || '',
                            healthProvider: healthProvider || '',
                            bloodType: bloodType || '',
                            alergies: {
                                set: allergies as string[],
                            },
                            observations: observations || '',
                            diseases: {
                                set: diseases as string[],
                            },
                        },
                    },
                },
                playerInjuries: {
                    upsert: {
                        update: {
                            name: {
                                set: injuries,
                            },
                        },
                        create: {
                            name: injuries || '',
                            observations: observations || '',
                            occurrenceDate: new Date(),
                        },
                    },
                },
                playerSurgeries: {
                    upsert: {
                        update: {
                            name: {
                                set: surgeries,
                            },
                        },
                        create: {
                            name: surgeries || '',
                            observations: observations || '',
                            performedDate: new Date(),
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
        allergies,
        setAllergies,
        bloodType,
        setBloodType,
        diseases,
        setDiseases,
        handleUpdatePlayerMedical,
        healthProvider,
        setHealthProvider,
        imc,
        setImc,
        setWeight,
        injuries,
        setInjuries,
        setHeight,
        height,
        setSurgeries,
        surgeries,
        weight,
        observations,
        setObservations,
    }
}
