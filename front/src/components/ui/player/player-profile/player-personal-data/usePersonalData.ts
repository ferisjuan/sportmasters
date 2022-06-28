// @vendors
import { useEffect, useState } from 'react'

// @hooks
import { useStores } from '~/hooks'

// @generated
import {
    Gender,
    Guardian_Type,
    Ndi_Type,
    Player_Payment_Status,
    PlayerDataQuery,
    usePlayerDataQuery,
    useUpdatePlayerMutation,
} from '~/generated/graphql'

// @interface
interface UsePersonalData {
    dateValue?: Date
    gender?: string
    handleUpdatePlayerData: () => void
    name?: string
    playerData?: PlayerDataQuery
    lastName?: string
    playerId?: string
    payment?: string
    guardianName?: string
    guardianLastName?: string
    guardianPhone?: string
    guardianEmail?: string
    playerEmail?: string
    setDateValue: (e: Date) => void
    setGender: (e: Gender) => void
    setName: (e: string) => void
    setLastName: (e: string) => void
    setPlayerId: (e: string) => void
    setPayment: (e: Player_Payment_Status) => void
    setGuardianName: (e: string) => void
    setGuardianLastName: (e: string) => void
    setGuardianPhone: (e: string) => void
    setGuardianEmail: (e: string) => void
    setPlayerIdType: (e: Ndi_Type) => void
}

export const useUpdatePersonalData = (): UsePersonalData => {
    const { playerStore } = useStores()

    const { data: playerData } = usePlayerDataQuery({
        where: { playerEmail: playerStore.playerEmail },
    })

    const [name, setName] = useState<string | undefined>('')
    const [lastName, setLastName] = useState<string | undefined>('')
    const [playerId, setPlayerId] = useState<string | undefined>('')
    const [playerIdType, setPlayerIdType] = useState<Ndi_Type>()
    const [dateValue, setDateValue] = useState<Date>()
    const [gender, setGender] = useState<Gender>()
    const [payment, setPayment] = useState<Player_Payment_Status>()
    const [guardianName, setGuardianName] = useState<string>()
    const [guardianLastName, setGuardianLastName] = useState<string>()
    const [guardianPhone, setGuardianPhone] = useState<string>()
    const [guardianEmail, setGuardianEmail] = useState<string>()
    const [playerEmail, setPlayerEmail] = useState('')

    const { mutate: updatePlayerData } = useUpdatePlayerMutation({
        onSuccess: (): void => {
            console.log('Succes')
        },
    })

    useEffect(() => {
        setName(playerData?.player?.name)
        setLastName(playerData?.player?.lastName)
        setPlayerId(playerData?.player?.playerData.playerIdNumber)
        setPlayerIdType(playerData?.player?.playerData.playerIdType)
        setGender(playerData?.player?.playerData?.gender)
        setDateValue(playerData?.player?.playerData.birthday)
        setPlayerEmail(playerStore.playerEmail)
        setGuardianName(playerData?.player?.playerGuardian?.guardianName)
        setGuardianLastName(playerData?.player?.playerGuardian?.guardianLastName)
        setGuardianPhone(playerData?.player?.playerGuardian?.guardianPhone)
        setGuardianEmail(playerData?.player?.playerGuardian?.guardianEmail)
        setPayment(playerData?.player?.playerPaymentStatus)
    }, [playerData])

    const handleUpdatePlayerData = (): void => {
        if (!name?.length) return

        updatePlayerData({
            data: {
                name: {
                    set: name,
                },
                lastName: {
                    set: lastName,
                },
                playerPaymentStatus: {
                    set: payment,
                },
                playerData: {
                    update: {
                        birthday: {
                            set: dateValue,
                        },
                        gender: {
                            set: Gender.Male,
                        },
                        playerIdNumber: {
                            set: playerId,
                        },
                        playerIdType: {
                            set: playerIdType,
                        },
                    },
                },
                playerGuardian: {
                    upsert: {
                        update: {
                            guardianEmail: {
                                set: guardianEmail,
                            },
                            guardianPhone: {
                                set: guardianPhone,
                            },
                            guardianName: {
                                set: guardianName,
                            },
                            guardianLastName: {
                                set: guardianLastName,
                            },
                        },
                        create: {
                            guardianLastName: guardianLastName || '',
                            guardianEmail: guardianEmail || '',
                            guardianName: guardianName || '',
                            guardianPhone: guardianPhone || '',
                            guardianId: '1235',
                            guardianIdType: Ndi_Type.NationalId,
                            guardianType: Guardian_Type.Father,
                            guardianIdExpeditionPlace: '',
                        },
                    },
                },
            },
            where: {
                playerEmail: playerEmail,
            },
        })
    }

    playerStore.player.id = playerData?.player?.id || ''

    return {
        dateValue,
        gender,
        handleUpdatePlayerData,
        lastName,
        name,
        playerData,
        setDateValue,
        setGender,
        setLastName,
        setName,
        playerId,
        setPlayerId,
        setGuardianName,
        setGuardianLastName,
        setPayment,
        setGuardianEmail,
        setGuardianPhone,
        guardianLastName,
        guardianName,
        guardianEmail,
        guardianPhone,
        payment,
        playerEmail,
        setPlayerIdType,
    }
}
