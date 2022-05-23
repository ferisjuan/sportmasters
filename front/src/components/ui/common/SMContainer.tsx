import { Container, Loader } from '@mantine/core'

interface SMContainerProps {
    children: React.ReactNode
    isLoading?: boolean
}

export const SMContainer: React.FC<SMContainerProps> = ({ children, isLoading }) => (
    <Container
        sx={{
            alignItems: 'center',
            display: 'flex',
            flexWrap: 'wrap',
            maxHeight: '80%',
            justifyContent: 'center',
        }}
    >
        {isLoading ? <Loader color="indigo" variant="bars" /> : <>{children}</>}
    </Container>
)
