import { Container } from '@mantine/core'

interface SMRowProps {
    align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline' | 'initial' | 'inherit'
    children: React.ReactNode
    justify?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'space-evenly'
        | 'stretch'
        | 'initial'
        | 'inherit'
}

export const SMRow: React.FC<SMRowProps> = ({ align = 'center', children, justify = 'flex-start' }) => (
    <Container
        mb="xs"
        mt="lg"
        sx={{
            alignItems: align,
            display: 'flex',
            flex: 1,
            gap: 20,
            justifyContent: justify,
        }}
    >
        {children}
    </Container>
)
