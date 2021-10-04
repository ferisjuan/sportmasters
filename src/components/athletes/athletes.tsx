import { ReactElement } from 'react'
import { Table } from '@mantine/core'
import { AthletesProps } from './athletes.interface'

export const Athletes = ({
    id,
    date,
    description,
    level,
    name,
    sex,
    specialty,
    sport,
    weight,
}: AthletesProps): ReactElement => {
    return (
        <Table style={{ marginTop: 10, width: 768 }}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Sex</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Weight</th>
                    <th>Sport</th>
                    <th>Specialty</th>
                    <th>Level</th>
                </tr>
            </thead>
            <tbody>
                <tr key={name}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{sex}</td>
                    <td>{date}</td>
                    <td>{description}</td>
                    <td>{weight}</td>
                    <td>{sport}</td>
                    <td>{specialty}</td>
                    <td>{level}</td>
                </tr>
            </tbody>
        </Table>
    )
}
