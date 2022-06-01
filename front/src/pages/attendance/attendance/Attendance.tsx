// @vendors
import { observer } from 'mobx-react-lite'
import { MdPersonAddDisabled } from 'react-icons/md'

// @components
import { SMContainer } from '~/components'
import { SMTable } from '~/components/ui/common/SMTable'

// @hooks
import { useAttendance } from './useAttendance'

export const Attendance: React.FC = observer(() => {
    const { handleAddPlayerMissattendance, headers, isLoading, tData } = useAttendance()

    const actions = [{ cb: handleAddPlayerMissattendance, Icon: MdPersonAddDisabled }]

    return (
        <SMContainer isLoading={isLoading}>
            <SMTable data={tData} headers={headers} actions={actions} />
        </SMContainer>
    )
})
