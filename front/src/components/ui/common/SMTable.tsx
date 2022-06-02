// @vendors
import { ActionIcon, Table } from '@mantine/core'
import type { IconType } from 'react-icons'
import uuid from 'react-uuid'

interface Action {
    cb: ((e: never) => void) | undefined
    Icon: IconType
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Data = Record<string, any>

interface SMTableProps {
    actions?: Action[]
    data?: Data[] | undefined
    headers: string[]
}

export const SMTable: React.FC<SMTableProps> = ({ actions, data, headers }) => (
    <Table>
        <thead>
            <tr>
                {headers.map(header => {
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

                    <td>
                        {actions?.map(({ cb, Icon }) => (
                            <ActionIcon
                                color="primary"
                                key={uuid()}
                                onClick={() => {
                                    if (!cb) return
                                    cb(d as never)
                                }}
                            >
                                <Icon size={24} />
                            </ActionIcon>
                        ))}
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>
)
