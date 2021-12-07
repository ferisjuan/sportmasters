import { Container, Text } from '@mantine/core'

export interface StatsLeadProps {
    title: string
    subTitle: string
}

export const StatsLead: React.VFC<StatsLeadProps> = ({ title, subTitle }) => {
    return (
        <Container size="sm">
            <Text align="center" size="xl" style={{ color: 'white' }} weight={700}>
                {title}
            </Text>
            <Text align="center" size="md" style={{ color: 'white' }} weight={200}>
                {subTitle}
            </Text>
        </Container>
    )
}
