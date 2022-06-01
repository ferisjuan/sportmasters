// @vendors
import { Button } from '@mantine/core'
import { observer } from 'mobx-react-lite'

// @components
import { SMContainer } from '~/components'
import { SMRow } from '~/components/ui/common/SMRow'
import { SMTable } from '~/components/ui/common/SMTable'

// @hooks
import { useAttendance } from './useAttendance'

export const Attendance: React.FC = observer(() => {
    const { handleAddPlayerMissattendance, headers, isLoading, tData } = useAttendance()

    return (
        <SMContainer isLoading={isLoading}>
            <SMRow justify="flex-end">
                <Button onClick={handleAddPlayerMissattendance} sx={{ justifySelf: 'flex-end' }}>
                    Add missing
                </Button>
            </SMRow>

            <SMTable data={tData} headers={headers} />
        </SMContainer>
    )
})
