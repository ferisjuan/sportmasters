// @vendors
import { Table } from '@mantine/core'
import { observable } from 'mobx'

// @generated
import { usePlayerAttendancesQuery } from '~/generated/graphql'

// @hooks
import { useStores } from '~/hooks'

export const PlayerAttendance: React.FC = observable(() => {
    // const {
    //     playerStore: { player },
    // } = useStores()

    // const { data } = usePlayerAttendancesQuery({
    //     where: { id: { equals: player.id || '' } },
    // })

    // console.log('🚀🚀🚀 ~ file: PlayerAttendance.tsx ~ line 9 ~ playerAttendance', data)

    return (
        <Table>
            <thead>
                <tr>
                    <th>Nombre</th>
                </tr>
            </thead>
            <tbody></tbody>
        </Table>
    )
})
