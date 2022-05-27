import { Grid, Text } from '@mantine/core'

interface GridProps {
    span?: number
    text?: string | null
    title?: string
}

export const PlayerGridCol: React.FC<GridProps> = ({ span, text, title }) => {
    return (
        <Grid.Col span={span}>
            <Text weight="bold">{title}</Text>
            <Text>{text}</Text>
        </Grid.Col>
    )
}
