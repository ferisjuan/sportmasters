import { Grid, Text, TextInput } from '@mantine/core'
import { useState } from 'react'
import { DatePicker } from '@mantine/dates'

interface GridProps {
    span?: number
    text?: string | null
    title?: string
    date?: Date
    isEditable?: boolean
}

export const PlayerGridCol: React.FC<GridProps> = ({ span, text, title, date, isEditable }) => {
    const [value, setValue] = useState(text || '')
    const [dateValue, setDateValue] = useState(date || null)

    console.log(dateValue)

    return (
        <Grid.Col span={span}>
            <Text weight="bold">{title}</Text>
            {title === 'Fecha de nacimiento' ? (
                <DatePicker value={dateValue} disabled={isEditable} onChange={setDateValue} />
            ) : (
                <TextInput
                    disabled={isEditable}
                    value={value}
                    required
                    onChange={event => setValue(event.target.value)}
                />
            )}
        </Grid.Col>
    )
}
