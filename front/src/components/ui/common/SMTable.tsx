import { Table } from '@mantine/core'
import { useUuid } from '@mantine/hooks'

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
                <tr key={useUuid()}>
                    {Object.values(d).map(value => (
                        <td key={useUuid()}>{value}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </Table>
)
