import { Grid, Text, TextInput } from '@mantine/core'
import { useState } from 'react'
import { DatePicker } from '@mantine/dates'

interface GridProps {
    span?: number
    text?: string | null
    title?: string
    date?: Date
}

export const PlayerGridCol: React.FC<GridProps> = ({ span, text, title, date }) => {
    const [value, setValue] = useState(text || '')
    const [dateValue, setDateValue] = useState(date || null)

    return (
        <Grid.Col span={span}>
            <Text weight="bold">{title}</Text>
            {title === 'Fecha de nacimiento' ? (
                <DatePicker value={dateValue} onChange={setDateValue} />
            ) : (
                <TextInput value={value} required onChange={event => setValue(event.target.value)} />
            )}
        </Grid.Col>
    )
}
