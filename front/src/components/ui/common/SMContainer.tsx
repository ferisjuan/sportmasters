import { Container, Loader } from '@mantine/core'

interface SMContainerProps {
    children?: React.ReactNode
    isLoading?: boolean
}

export const SMContainer: React.FC<SMContainerProps> = ({ children, isLoading }) => (
    <Container
        sx={{
            alignItems: 'center',
            display: 'flex',
            flex: 1,
            flexWrap: 'wrap',
            height: '100%',
            justifyContent: 'center',
            width: '100%',
        }}
    >
        {isLoading ? <Loader color="indigo" variant="bars" /> : <>{children}</>}
    </Container>
)
