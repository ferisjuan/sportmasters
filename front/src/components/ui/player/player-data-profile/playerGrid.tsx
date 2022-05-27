import { Grid, Text } from '@mantine/core'

interface GridProps {
    span?: number
    text?: string | null
    title?: string
    weight?: string
}

export const PlayerGrid: React.FC<GridProps> = ({ span, text, weight, title }) => {
    return (
        <Grid.Col span={span}>
            <Text weight={weight}>{title}</Text>
            <Text>{text}</Text>
        </Grid.Col>
    )
}
