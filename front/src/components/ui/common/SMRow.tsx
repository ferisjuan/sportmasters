import { Container } from '@mantine/core'

interface SMRowProps {
    align?: 'center' | 'end' | 'start'
    children: React.ReactNode
    justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'
}

export const SMRow: React.FC<SMRowProps> = ({ align, children, justify }) => (
    <Container
        mb="xs"
        mt="lg"
        sx={{
            alignItems: align,
            display: 'flex',
            flex: 1,
            justifyContent: justify,
        }}
    >
        {children}
    </Container>
)
