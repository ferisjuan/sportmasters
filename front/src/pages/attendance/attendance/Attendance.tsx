// @vendors
import { MdPersonAddDisabled } from 'react-icons/md'
import { Button, Modal, NativeSelect } from '@mantine/core'
import { observer } from 'mobx-react-lite'

// @components
import { SMContainer } from '~/components'
import { SMTable } from '~/components/ui/common/SMTable'

// @hooks
import { useAttendance, useSaveAttendance } from './hooks'
import { Missed_Reason, Player_Category } from '~/generated/graphql'
import { SyntheticEvent } from 'react'

// @components
import { SMRow } from '~/components/ui/common/SMRow'

const missedReasons = Object.keys(Missed_Reason).map(key => ({ value: key, label: key }))

const playerCategories = Object.keys(Player_Category).map(key => ({ value: key, label: key }))

missedReasons.unshift({ value: '', label: 'Seleccione una...' })
playerCategories.unshift({ value: '', label: 'Todos' })

export const Attendance: React.FC = observer(() => {
    const { categoryFilter, handleClearFilter, headers, isLoading, players, setCategoryFilter } = useAttendance()

    const {
        closeModal,
        handleAddPlayerMissattendance,
        handleOpenModal,
        isModalOpen,
        missedReason,
        playerName,
        setMissedReason,
    } = useSaveAttendance()

    const actions = [{ cb: handleOpenModal, Icon: MdPersonAddDisabled }]

    return (
        <>
            <Modal opened={isModalOpen} onClose={closeModal} title={`Excusa para ${playerName}`}>
                <NativeSelect
                    data={missedReasons}
                    onChange={(event: SyntheticEvent<HTMLSelectElement>) =>
                        setMissedReason(event.currentTarget.value as keyof typeof Missed_Reason)
                    }
                    value={missedReason}
                />

                <Button disabled={!missedReason.length} fullWidth onClick={handleAddPlayerMissattendance} mt="md">
                    Submit
                </Button>
            </Modal>

            <SMRow align="flex-end">
                <NativeSelect
                    data={playerCategories}
                    label="Categoria"
                    onChange={(event: SyntheticEvent<HTMLSelectElement>) =>
                        setCategoryFilter(event.currentTarget.value as keyof typeof Player_Category)
                    }
                    value={categoryFilter}
                />

                <Button color="indigo" onClick={handleClearFilter} variant="subtle">
                    Limpiar
                </Button>
            </SMRow>

            <SMContainer isLoading={isLoading}>
                <SMTable data={players} headers={headers} actions={actions} />
            </SMContainer>
        </>
    )
})
