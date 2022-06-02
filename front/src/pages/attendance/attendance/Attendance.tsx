// @vendors
import { MdPersonAddDisabled } from 'react-icons/md'
import { Button, NativeSelect } from '@mantine/core'
import { observer } from 'mobx-react-lite'
import { useModals } from '@mantine/modals'

// @components
import { SMContainer } from '~/components'
import { SMTable } from '~/components/ui/common/SMTable'

// @hooks
import { useAttendance } from './useAttendance'
import { Missed_Reason, Player, PlayerAttendance, PlayerSportData } from '~/generated/graphql'
import { useState } from 'react'

const missedReasons = Object.keys(Missed_Reason).map(key => ({ value: key, label: key }))

export const Attendance: React.FC = observer(() => {
    const { handleAddPlayerMissattendance, headers, isLoading, playerData } = useAttendance()

    const modals = useModals()

    const [missedReason, setMissedReason] = useState(missedReasons[0].label)

    const openPlayerMissattendanceModal = (e: Player & PlayerAttendance & PlayerSportData): void => {
        const id = modals.openModal({
            title: 'Registrar inasistencia',
            children: (
                <>
                    <NativeSelect
                        data={missedReasons}
                        label="Seleccione un motivo"
                        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                            setMissedReason(event?.currentTarget.value)
                        }
                        value={missedReason}
                    />

                    <Button
                        fullWidth
                        onClick={() => {
                            modals.closeModal(id)

                            handleAddPlayerMissattendance({
                                email: e.playerEmail,
                                reason: missedReason,
                                sport: e.sport,
                            })
                        }}
                        mt="md"
                    >
                        Submit
                    </Button>
                </>
            ),
        })
    }

    const handleOnAddPlayerMissattendance = (e: never): void => {
        openPlayerMissattendanceModal(e)
    }

    const actions = [{ cb: handleOnAddPlayerMissattendance, Icon: MdPersonAddDisabled }]

    return (
        <SMContainer isLoading={isLoading}>
            <SMTable data={playerData} headers={headers} actions={actions} />
        </SMContainer>
    )
})
