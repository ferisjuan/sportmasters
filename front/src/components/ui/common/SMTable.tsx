// @vendors
import { ActionIcon, Table } from '@mantine/core'
import type { IconType } from 'react-icons'
import { FcSettings } from 'react-icons/fc'
import uuid from 'react-uuid'

interface Action {
    cb: ((e: unknown) => void) | undefined
    Icon: IconType
}

interface SMTableProps {
    actions?: Action[]
    data?: Record<string, string>[]
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
                                    cb(d)
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
