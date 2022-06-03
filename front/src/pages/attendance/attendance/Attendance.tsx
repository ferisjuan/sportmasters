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
import { Missed_Reason, Player, PlayerAttendance, PlayerSportData, Player_Category } from '~/generated/graphql'
import { SyntheticEvent, useState } from 'react'
import { SMRow } from '../../../components/ui/common/SMRow'

const missedReasons = Object.keys(Missed_Reason).map(key => ({ value: key, label: key }))

const playerCategories = Object.keys(Player_Category).map(key => ({ value: key, label: key }))

playerCategories.unshift({ value: '', label: 'Todos' })

export const Attendance: React.FC = observer(() => {
    const { categoryFilter, handleAddPlayerMissattendance, headers, isLoading, players, setCategoryFilter } =
        useAttendance()

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
        <>
            <SMRow align="flex-end">
                <NativeSelect
                    data={playerCategories}
                    label="Categoria"
                    onChange={(event: SyntheticEvent<HTMLSelectElement>) =>
                        setCategoryFilter(event.currentTarget.value as keyof typeof Player_Category)
                    }
                    value={categoryFilter}
                />
                <Button onClick={() => setCategoryFilter('')} variant="subtle">
                    Limpiar
                </Button>
            </SMRow>

            <SMContainer isLoading={isLoading}>
                <SMTable data={players} headers={headers} actions={actions} />
            </SMContainer>
        </>
    )
})
