import { Container } from '@mantine/core'

interface SMContainerProps {
    children: React.ReactNode
}

export const SMContainer: React.FC<SMContainerProps> = ({ children }) => (
    <Container sx={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
        {children}
    </Container>
)
