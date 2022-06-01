// @vendors
import { Button } from '@mantine/core'
import { observer } from 'mobx-react-lite'

// @components
import { SMContainer } from '../../../common'
import { SMRow } from '../../../common/SMRow'
import { SMTable } from '../../../common/SMTable'
import { useAttendance } from './useAttendance'

export const PlayerAttendance: React.FC = observer(() => {
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
