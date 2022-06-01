// @vendors
import { Table } from '@mantine/core'
import uuid from 'react-uuid'

interface SMTableProps {
    data?: Record<string, string>[]
    headers: string[]
}

export const SMTable: React.FC<SMTableProps> = ({ data, headers }) => (
    <Table>
        <thead>
            <tr>
                {headers.map(header => {
                    if (header === 'playerId') return
                    return <th key={header}>{header}</th>
                })}
            </tr>
        </thead>
        <tbody>
            {data?.map(d => (
                <tr key={uuid()}>
                    {Object.values(d).map(value => (
                        <td key={uuid()}>{value}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </Table>
)
