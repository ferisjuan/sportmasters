import { Grid, Text } from '@mantine/core'

interface GridProps {
    span?: number
    text?: string
    name?: string
    weight?: string
}

export const PlayerGrid: React.FC<GridProps> = ({ span, text, weight, name }) => {
    return (
        <Grid.Col span={span}>
            <Text weight={weight}>{name}</Text>
            <Text>{text}</Text>
        </Grid.Col>
    )
}
